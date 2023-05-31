import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../../../components/UI/molecules/nav/Nav";

import dynamic from "next/dynamic";
const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);

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

 const Principal = () => {
  const [dataDummy, setDataDummy] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem("userLogin"));
  console.log(dataUser)

    const links = [
      { text: 'Inicio', url: '/Intranet/vistas/principal' },
        { text: 'Productos', url: '/Intranet/vistas/productos' },
        { text: 'Categorias', url: '/Intranet/vistas/categorias' },
        { text: 'Ir al Login', url: '/Intranet/vistas/login' },
        // Agrega más enlaces aquí
      ];

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
        <div>
      
          {/* <h1>Nombre de tu aplicación</h1> */}
          <Navbar links={links} active={true} classname="myCuFstomClass" />
          {dataUser && (
        <div>
          <p>USUARIO: {dataUser.Email}</p>
          
        </div>
      )}
          <h1>Home</h1>
        </div>
      );
};

export default Principal
