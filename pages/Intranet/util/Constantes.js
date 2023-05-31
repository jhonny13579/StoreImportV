console.log("process.env.REACT_APP_SERVER_URL_API", process.env);
function Constantes() {
  return {
    ApiConfig: {
      Asesor: {
        PATH_GetByAsesor: "/listar_asesores",
        PATH_GetByAsesorDNI: "/listar_asesor_dni",
         PATH_SaveAsesor: "/insert_asesor",
         PATH_UpdateAsesor: "/actualizar_asesor",
         PATH_DisabledAsesor: "/desactivar_asesor",
        //  PATH_ValidarLogin: "/validarLogin",
       //  PATH_DeleteClient: "/Cliente/clienteEliminar",
      },
      Clientes: {
        PATH_GetByClients: "/listar_clientes",
        PATH_SaveClients: "/insert_clientes",
        PATH_UpdateClients: "/actualizar_clientes",
        PATH_DisableClients: "/desactivar_cliente",
      },
      Pagos: {
        PATH_GetByClientesCuotasPendientes: "/listar_clientes_cuotasP",
        PATH_GetAllCuotasClient: "/lista_AllCuotas_cliente",
        PATH_UpdateCuotaClient: "/actualizar_pago_cuota",
        PATH_ResetCuotaClient: "/reiniciar_cuota",
      }
    },
   // ApiUri: process.env.REACT_APP_API_URL_PRD, // PRODUCCION
     ApiUri: process.env.REACT_APP_API_URL, // DESARROLLO
    ApiKey: {
      headersfinanza: {
        // "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_TOKEN_FINANZA,
      },
      Vesion: "Vers 1.2.1",
    },
    msm: {
      sesionExpirada: "Sesion Expirada favor ingresar nuevamente.!",
    },
    redirect: {
      localHost: "./Login",
    },
  };
}
export default Constantes;

// export const base64toBlob = (data) => {
//   const bytes = atob(data);
//   let length = bytes.length;
//   let out = new Uint8Array(length);
//   while (length--) {
//     out[length] = bytes.charCodeAt(length);
//   }
//   return new Blob([out], { type: "application/pdf" });
// };

export const convertStringToTime = (data) => {
  const date = new Date(data);
  return date.toLocaleTimeString();
};
export const convertStringToDateTime = (data) => {
  const date = new Date(data);
  const fechaRegister = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return `${fechaRegister}   ${date.toLocaleTimeString()}`;
};
export const convertStringToDate = (data) => {
  const date = new Date(data);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};
export const convertStringToMes = (data) => {
  const date = new Date(data);
  return date.getMonth();
};

export const changeRegExp = (str) => {
  return str.replace(/[^\w\s]/gi, "");
};
