import { toast } from "react-toastify";

export const successMsg = (msg) => {
  // console.log("first", msg);
  toast.dismiss();
  toast.success(msg);
};

export const errorMsg = (msg) => {
  // console.log("second", msg);
  toast.dismiss();
  toast.error(msg);
};
