import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "next-auth/client";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps}) {
  return (
    <Provider>
     
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <div>
        <Component {...pageProps} />
      </div>
      <ToastContainer/>
    </Provider>
  );
}

export default MyApp;
