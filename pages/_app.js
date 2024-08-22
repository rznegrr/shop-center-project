// import { StoreProvider } from "../store/productStoreProvider";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store/cartSliceProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
