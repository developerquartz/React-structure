import { logout } from "../redux/auth/slice";
import store from "../redux/store";
import { errorMsg } from "../utils/toastMessage";

export async function handleApiRequest(
  method,
  request = "",
  showErrorToast = true,
  onError = () => {}
) {
  try {
    const response = await store.dispatch(method(request)).unwrap();

    if (response?.message && response?.message === "success") {
      return response;
    } else {
      onError();
      showErrorToast && errorMsg(JSON.stringify(response.error));
      return {};
    }
  } catch (error) {
    console.log("api error", error.message, error);

    if (error.message === "Unauthenticated.") {
      const response = store.dispatch(logout());
    }
    showErrorToast && errorMsg(error?.message);
    return {};
  }
}
