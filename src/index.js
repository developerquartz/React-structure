import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import LoadIndicator from "./Component/Loader";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <ToastContainer />
      <LoadIndicator />
      <App />
    </PersistGate>
  </Provider>,
  rootElement
);
