
import alertify from "alertifyjs";

export const getAlert = (detail, redirect, alertMessage) => {
  alertify
    .alert(detail, function () {
      console.log("redirect",redirect);
      if (redirect !== "") {
        window.location.href = redirect;
      } else if (redirect === "./login") {
        window.location.href = redirect;
        localStorage.removeItem("userLogin");
        localStorage.removeItem("studientActive");
        localStorage.removeItem("studientList");
      }
    })
    .setHeader(
      alertMessage === "" || alertMessage === undefined
        ? "Notificación de Sección"
        : alertMessage
    );
};
