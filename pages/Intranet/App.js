import React, { useState, useEffect } from 'react';
import './App.css';
import './css/header.css';
import './css/body.css';
import './css/footer.css';

/* End By Javi */
import './css/custom.css';
/*import '../src/components/Movil/movil.css'*/
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/bootstrap.min.css";
/* Begin By Javi */

import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//PAGINAS
import Home from "./components/Home";
//FIN PAGINAS

//PROVIDER
import { DataProvider } from "./context/DataContext";
import utils from './util'
//END PROVIDER

const { isMobile } = utils
function App() {
  const [_isMobile] = useState(isMobile());



  return (
    <DataProvider>
      <Home isMobile={_isMobile} />
      <InstallPWA />
    </DataProvider>
  );
}

export default App;
