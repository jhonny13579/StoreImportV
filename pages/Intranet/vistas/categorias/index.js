import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../../../components/UI/molecules/nav/Nav";


 const Categorias = () => {

    const links = [
        { text: 'Marcas', url: '/Intranet/vistas/principal' },
        { text: 'Productos', url: '/Intranet/vistas/productos' },
        { text: 'Categorias', url: '/Intranet/vistas/categorias' },
        { text: 'Ir al Login', url: '/Intranet/vistas/login' },
        // Agrega más enlaces aquí
      ];
    
      return (
        <div>
          {/* <h1>Nombre de tu aplicación</h1> */}
          <Navbar links={links} active={true} classname="myCuFstomClass" />
          <h1>Categorias</h1>
        </div>
      );
};

export default Categorias
