import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./index.module.scss";
import Navbar from "../../../../components/UI/molecules/nav/Nav";
import {apiMarcas} from "../../../../pages/api/index"
import dynamic from "next/dynamic";
import ModalForm from "../../../../components/UI/atoms/modal/Modal";


const links = [
  { text: 'Marcas', url: '/Intranet/vistas/principal' },
    { text: 'Productos', url: '/Intranet/vistas/productos' },
    { text: 'Categorias', url: '/Intranet/vistas/categorias' },
    { text: 'Ir al Login', url: '/Intranet/vistas/login' },
    // Agrega más enlaces aquí
  ];
  

const TableDinamic = dynamic(
  () => import("../../../../components/UI/molecules/tableDinamic/Table"),
  {
    ssr: false,
  }
);
import TableOne from "../../../../components/UI/organisms/table/Tabla"
import Input from "../../../../components/UI/atoms/input/Input";
import Label from "../../../../components/UI/atoms/label/Label";
import Button  from "../../../../components/UI/atoms/button/Button";
import { ModalHeader } from "react-bootstrap";


 const Principal = () => {
  const handleEditar = (rowData) => {
  
    setFormData(rowData);
    handleOpenModal();
    setStateEdit(true);
    console.log("stateEdit",stateEdit)
    // Lógica para editar el registro con los datos de 'rowData'
    console.log("Editar registro:", rowData);
  };
  
  const handleEliminar = (rowData) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar el registro?');
  
    if (confirmacion) {
      const obj = {
        MarcaId: rowData.Codigo,
        Name: rowData.Name,
        Activo: 0,
      };
  
      const promise = apiMarcas.DisabledMarcaProd(obj);
      promise.then((res) => {
        if (res !== undefined) {
          // Alerta de éxito al eliminar
          alert('Registro eliminado correctamente');
          listarMarcas();
        } else {
          // Alerta de error al eliminar
          alert('Hubo un error al eliminar el registro');
        }
      });
    }
  
    console.log("Eliminar registro:", rowData);
  };
// const COLUMNS = [
//   {
//     label: "Código",
//     field: "Codigo",
//     key: "Codigo",
//     sort: "asc",
//   },
//   { 
//     label: "Nombre",
//     field: "Name",
//     key: "Name",
//     sort: "asc",
//   },
//   {
//     label: "Acciones",
//     render: (rowData) => (
//       <div>
//         <button onClick={() => handleEdit(rowData)}>Editar</button>
//         <button onClick={() => handleDelete(rowData)}>Eliminar</button>
//         {/* Agrega más botones y funcionalidades según tus necesidades */}
//       </div>
//     ),
//   }
  
// ];
const [stateEdit, setStateEdit] = useState(false);

  const [dataDummy, setDataDummy] = useState([]);
  const [dataUser, setDataUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({
    Codigo:"",
    Name: "",
  });


  const limpiarForm = () => {
    setFormData({
      Codigo:"",
      Name: "",
     
    });
  };




  const listarMarcas = () =>{
    const promise = apiMarcas.BylistMarca();
     
    promise.then((respu) => {
      console.log("BylistMarquita", respu);
      setDataDummy(respu);
    });

  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
     Name: formData.Name,
     Active: 1,
    }
      const promise = apiMarcas.SaveMarcaProd(obj, "");
      promise.then((res) => {
        if (res !== undefined) {
          listarMarcas();
          console.log("Correcto registro", res);
        }
      });
     
      setIsModalOpen(false);
      limpiarForm();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {

     MarcaId: formData.Codigo,
     Name: formData.Name,
     Activo: 1,
    }
      const promise = apiMarcas.UpdateMarcaProd(obj, "");
      promise.then((res) => {
        if (res !== undefined) {
          listarMarcas();
          console.log("Correcto Update", res);
        }
      });
     
      setIsModalOpen(false);
      limpiarForm();
  };

  const handleOpenModal = () => {
    setStateEdit(false)
    setIsModalOpen(true);
    console.log("stateEdit",stateEdit)
   
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    limpiarForm();
    console.log("stateEdit",stateEdit)
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData" , formData)
  };


  useEffect(() => {
    const dtDummy = [];
    setDataDummy(dtDummy);

    const userData = JSON.parse(localStorage.getItem("userLogin"));
    setDataUser(userData);
      
    listarMarcas(); 

  },[]);

  const filteredData = dataDummy.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.Codigo.toString().includes(searchValue)
  );


      return (
        <div>
      
          {/* <h1>Nombre de tu aplicación</h1> */}
          <Navbar links={links} active={true} classname="navbar" />
          {dataUser && (
        <div>
          <p>USUARIO: {dataUser.Email}</p>
          
        </div>
      )}
          <h1>Marcas</h1>
          <div className={styles.container}>
            <Input
              classname={styles.button}
              type="button"
              value="Ingresar"
              onClick={handleOpenModal}
            >
            </Input>
          </div>
            {/* <div className={styles.tabla}>
            <TableDinamic columns={COLUMNS} listData={dataDummy} />
            
          </div> */}
            <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Buscar..."
      />
          <div className={styles.tabla}>
          <TableOne
            
          >
          <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Editar</th> {/* Nueva columna para los botones */}
        <th>Desactivar</th>
      </tr>
    </thead>
    <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.Codigo}</td>
              <td>{item.Name}</td>
              <td>
                <Button onClick={() => handleEditar(item)}>Editar</Button>
              
              </td>
              <td>
              <Button onClick={() => handleEliminar(item)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
    </TableOne>
            
          </div>
       
            
    <ModalForm
      show={isModalOpen}
      onHide={handleCloseModal}
      titulo="Agregar"
     
      style={{
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Contenido del modal */}

    {stateEdit ? (<>
    
      <Input 
    type="input"
    onchange={handleInputChange}
    value={formData.Codigo}
    disabled={true}
    ></Input>

    </>):(<>
    
    
    </>)}

    <Input 
    type="input"
    onchange={handleInputChange}
    value={formData.Name}
    name="Name"
    ></Input>

  {stateEdit ? (<>
    <Button
      onClick={handleSubmitEdit}
    >
      Actualizar
    </Button>
  
    </>):(<>
    
      <Button
      onClick={handleSubmit}
    >
      Guardar
    </Button>
    </>)}
    </ModalForm>

        </div>
      );
};

export default Principal
