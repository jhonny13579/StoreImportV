/** @format */

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

import dynamic from "next/dynamic";
const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);



import { apiLogin } from "../../api/index";
import { Loader } from "../../utils/loader";
import Label from "../../../../components/UI/atoms/label/Label";
import ButtonA from "../../../../components/UI/atoms/input/Input";
const COLUMNS = [
  {
    label: "Rango de horas",
    field: "HorDescription",
    key: "HorDescription",
    sort: "asc",
  },
  { label: "Luness", field: "Lunes", key: "Lunes", sort: "asc" },
  { label: "Martes", field: "Martes", key: "Martes", sort: "asc" },
  { label: "Miércoles", field: "Miercoles", key: "Miercoles", sort: "asc" },
  { label: "Jueves", field: "Jueves", key: "Jueves", sort: "asc" },
  { label: "Viernes", field: "Viernes", key: "Viernes", sort: "asc" },
  { label: "Sábado", field: "Sabado", key: "Sabado", sort: "asc" },
  { label: "Domingo", field: "Domingo", key: "Domingo", sort: "asc" },
];

const Login = () => {
  const [loginValue, setLoginValue] = useState({

    usuario:"",
    contrasenia:"",

  });
  const [Loading, setloading] = useState(false);
  const [dataDummy, setDataDummy] = useState([]);

  const [alertMessage, setMessage] = useState("Login Financiera");

  const handleInputChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
    console.log("loginValue" , loginValue)
  };

  const handleClickIngresar = async () => {

    localStorage.removeItem("userLogin");
    const user = {
      Email: loginValue.usuario,
      Password: loginValue.contrasenia,
      Activo: 1,
      IdToken: "",
    };

    const promise = apiLogin.ValidaLogin(user);
    console.log("promise", promise);
    promise.then((res) => {
      console.log("res", res);
      if (res !== undefined) {
        if (res.Code === 200) {
          const dataResponse = res.Data.response;
          localStorage.setItem("userLogin", JSON.stringify(dataResponse));
          if (dataResponse) {
            window.location.href = "/Intranet/vistas/principal";
          }
          console.log("Correcto registro", dataResponse);
        }
      }
    });
  };
  useEffect(() => {
    // const dtDummy = [
    //   {
    //     HorDescription: "1",
    //     Lunes: "Lunes",
    //     Martes: "Martes",
    //     Miercoles: "Miercoles",
    //     Jueves: "Jueves",
    //     Viernes: "Viernes",
    //     Sabado: "Sabado",
    //     Domingo: "Domingo",
    //   },
    // ];
    // setDataDummy(dtDummy);
  });
  return (
    <div className={styles.loginContainer}>
      {Loader(Loading)}
      <h1 className={styles.h1}>Iniciar sesión</h1>
      <div className={styles.content}>
        <form>
          <div className={styles.formGroup}>
            <Label htmlFor="email" classname={styles.labelts} active={false}>
              Correo electrónico:
            </Label>
            <input
              type="email"
              id="email"
              name="usuario"
              value={loginValue.usuario}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <Label htmlFor="password" classname="label" active={true}>
              Contraseña:
            </Label>
            <input
              type="password"
              id="password"
              name="contrasenia"
              value={loginValue.contrasenia}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className="inputBx col-12">
            <ButtonA
            classname={styles.button}
              type="button"
              value="Ingresar"
              onClick={handleClickIngresar}
            >
            </ButtonA>
 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
