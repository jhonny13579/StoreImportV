/** @format */
console.log("process.env.REACT_APP_SERVER_URL_APIA", process.env);
function Constantes() {
  return {
    ApiConfig: {
      Login: {
        PATH_ValidarLogin: "/Login/ValidarLogin",
      },
   
    },
    // ApiUri: process.env.REACT_APP_API_URL_PRD, // PRODUCCION
    ApiUri: process.env.REACT_APP_SERVER_URL_API, // DESARROLLO|
    ApiKey: {
      headersfinanza: {
        // "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_TOKEN_FINANZA,
      },
      Vesion: "Vers 1.2.8",
    },
    msm: {
      sesionExpirada: "Sesion Expirada favor ingresar nuevamente.!",
    },
    redirect: {
      // localHost: "./Login",
    },
  };
}
export default Constantes;
