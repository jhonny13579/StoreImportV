import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from"./components/Footer"
import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
let URLactual = window.location;
ReactDOM.render(
  <React.StrictMode>
    <App />
    {URLactual.pathname.toUpperCase() === "/Intranet/login".toUpperCase() ||
    URLactual.pathname.toUpperCase() ===
      "/recuperar-constrasenia".toUpperCase() ? null : (
      <Footer />
    )}
  </React.StrictMode>,
  document.getElementById("root")
);
//serviceWorker.unregister();
//serviceWorkerRegistration.register();
