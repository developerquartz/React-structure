import axios from "axios";

// const baseURL = process.env.REACT_APP_API_BASE_URL;
const baseURL = "https://lat-admin.suffescom.dev/api/";

export default function runAxiosSetup({ token = "", adminId = "", headers = {} }) {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers = {
    Accept: "application/json",
    authorization: token ? `Bearer ${token}` : undefined,
    // customerid: adminId,
    ...headers,
  };
  // axios.interceptors.response.clear();

  axios.interceptors.response.use(
    function (response) {
      // console.log("axios response", response);
      if (response.status.toString()?.startsWith(2)) {
        return response;
      } else {
        var errorObject = {};
        if (response) {
          if (response.data?.message === "Not Authorized!") {
            errorObject.message = "Not Authorized!!";
            errorObject.code = "X_SERVER_ERROR";
            errorObject.type = 0;
            // return store.dispatch(logout());
          } else {
            errorObject.message = response.data.message || "Unknown Error !!!";
            errorObject.code = response.data.code || "X_UNKNOWN_ERROR";
            errorObject.type = response.status;
            errorObject.data = response.data;
          }
        }
        return Promise.reject(errorObject);
      }
    },
    async function (error) {
      // console.log("axios error", error);
      var errorObject = {};
      if (error.response) {
        errorObject.message =
          Object.values(error.response?.data?.errors || {})?.[0]?.join(", ") ||
          error.response.data.message ||
          "Server Error!!!";
        errorObject.code = error.response.data.code || "X_SERVER_ERROR";
        errorObject.type = error.response.status;
        errorObject.data = error.response.data;
      } else if (error.code === "ERR_NETWORK") {
        errorObject.message = "Network Error!!!";
        errorObject.code = "X_NETWORK_ERROR";
        errorObject.type = 0;
      } else {
        errorObject.message = error.message || "Unknown Error!!!";
        errorObject.code = error.code || "X_UNKNOWN_ERROR";
        errorObject.type = error.type || 0;
        errorObject.data = error.data || null;
      }
      return Promise.reject(errorObject);
    }
  );
}
