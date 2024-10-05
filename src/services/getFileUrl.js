import { getFileUrl } from "store/common/thunk";
import { errorMsg } from "../utils/toastMessage";
import { handleApiRequest } from "./handleApiRequest";

const convertToBase64 = async (file, file_type) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      if (file_type.includes("text")) {
        const base64String = reader.result.split(";base64,")[1];
        const base64Uri = `data:text/plain;base64,${base64String}`;
        resolve(base64Uri);
      } else {
        resolve(reader.result);
      }
    };
    reader.onerror = (error) => {
      console.log("called: error", error);
      reject(error);
    };
  });
};

export const fileUrl = async (file, request = {}) => {
  try {
    if (!file) return errorMsg("File not found");
    if (file.size > 5120000) return errorMsg("Max file size can be 5 Mb");

    const file_base64 = await convertToBase64(file, file.type);
    const file_type = file.type.split("/").pop();
    let extension = file_type;
    if (
      extension ===
      "vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      extension = "docx";
    }
    const file_request = {
      folder: "caregiverDocuments",
      extension: `.${extension}`,
      file: file_base64,
      ...request,
    };
    const file_url = await handleApiRequest(getFileUrl, file_request);
    return file_url?.data;
  } catch (error) {
    console.log("file upload error", error);
  }
};
