// import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
// import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

// import "../css/menu.css";
// import logo from "../assets/img/logo-fuchonet-svg.svg";
// import MenuIcon from "@material-ui/icons/Menu";
// import CancelIcon from "@material-ui/icons/Cancel";
// import imglogin from "../../src/assets/img/logosantander.jpg";
// import PersonIcon from '@mui/icons-material/Person';
// //ICONOS
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import SchoolIcon from "@material-ui/icons/School";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// import TodayIcon from "@material-ui/icons/Today";
// import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
// import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// import Salir from "../assets/img/salir.svg";
// import GetAppIcon from "@material-ui/icons/GetApp";
// import { Alert } from "bootstrap";
// //FIN ICONOS
// const dataUser = JSON.parse(localStorage.getItem('userLogin'));
// const documentId = dataUser && dataUser.results ? dataUser.results[0].num_doc : null;



  

// console.log("dataUserSileBar", documentId)
// function ActiveSlider_PG(_isMobile) {
//   let URLactual = window.location;
//   console.log("sidebar", URLactual.pathname);

//   let pagos = document.getElementById("pagos");

//   let asesores = document.getElementById("asesores");
//   let clientes = document.getElementById("clientes");

//   if (pagos.classList.contains("active-menu")) {
//     pagos.classList.remove("active-menu");
//   }

//   if (clientes.classList.contains("active-menu")) {
//     clientes.classList.remove("active-menu");
//   }

//   if (asesores.classList.contains("active-menu")) {
//     asesores.classList.remove("active-menu");
//   }

  

//   if (URLactual.pathname == "/pagos") {
//     pagos.classList.add("active-menu");
//   } else if (URLactual.pathname == "/clientes") {
//     clientes.classList.add("active-menu");
//   } else if (URLactual.pathname == "/asesores") {
//     asesores.classList.add("active-menu");
//   }
  



// }

// export default class Sidebar extends Component {
//   render() {
//     const _isMobile = this.props.isMobile;


//     const handleClickOcultar = async () => {
//       // document.getElementById("menu").checked = true;
//       ActiveSlider_PG(_isMobile);
//       let sidebar = document.getElementById("SidebarList");
//       let IconActive = document.getElementById("Icon-Active");
//       let IconCancel = document.getElementById("Icon-Cancel");
//       if (
//         sidebar.classList.value == "SidebarListHide" ||
//         sidebar.classList.value == ""
//       ) {
//         sidebar.classList.remove("SidebarListHide");
//         sidebar.classList.add("SidebarList");
//         IconActive.classList.remove("SidebarListHideIcon");
//         IconCancel.classList.add("SidebarListHideIcon");
//       } else {
//         sidebar.classList.remove("SidebarList");
//         sidebar.classList.add("SidebarListHide");
//         IconActive.classList.add("SidebarListHideIcon");
//         IconCancel.classList.remove("SidebarListHideIcon");
//       }
//     };
//     const handleClickSalir = async () => {
//       localStorage.removeItem("userLogin");
//       localStorage.removeItem("studientActive");
//       localStorage.removeItem("studientList");
//       window.location.href = "/Login";
//     };



//     return (


//       <div className="Sidebar"  style={{ background:  "rgba(254,0,0,255)" }}>
//            <div className="menu-list">
//           <label id="Icon-Active" htmlFor="menu">
//             <i>
//               <MenuIcon
//                 style={{ color: "#000000" }}
//                 onClick={handleClickOcultar}
//               />
//             </i>
//           </label>
//           <label
//             id="Icon-Cancel"
//             className="SidebarListHideIcon"
//             htmlFor="menu"
//           >
//             <i>
//               <CancelIcon
//                 style={{ color: "#000000" }}
//                 onClick={handleClickOcultar}
//               />
//             </i>
//           </label>
//         </div>


       
//   <span className="menuTextLogo">
//     <img
//       style={{ height: "auto", display: "block", maxWidth: "90%", marginLeft:"-30px" }}
//       src={imglogin}
//       alt="Imagen de login"
//     />
//   </span>
     
    

//         <ul id="SidebarList" className="SidebarList">

           
    
            


//             {documentId!=="9961724" ? (<>
//               <li
//               style={{ background:  "white" }}
//              id="pagos"
//             className="row active-menu"
//             onClick={handleClickOcultar}
//           >
//             <div id="icon">
//               <AppRegistrationIcon />
//             </div>
//             <Link
//               style={{ fontSize:"15px",fontWeight: 'bold' }}
            
//             id="tittle" to="/pagos">
//               Pagos
//             </Link>
//           </li>

//           <li id="clientes"
//            className="row"
//            style={{ background:  "white" ,}}
//             onClick={handleClickOcultar}>
//             <div id="icon">
//               <PersonIcon />
//             </div>
//             <Link 
//                 style={{ fontSize:"15px",fontWeight: 'bold' }}
//             id="tittle" to="/clientes">
//               Clientes
//             </Link>
//           </li>
//           <li id="asesores" 
//           className="row" 
//           style={{ background:  "white"}}
//           onClick={handleClickOcultar} hidden={true} >
//             <div id="icon">
//               <TodayIcon />
//             </div>
//             <Link
//                 style={{ fontSize:"15px",fontWeight: 'bold' }}
//             id="tittle" to="/asesores">
//               Asesores
//             </Link>
//           </li>

//             </>):(<>
//               <li
//              id="pagos"
//             className="row active-menu"
//             onClick={handleClickOcultar} hidden={true} 
//           >
//             <div id="icon">
//               <SchoolIcon />
//             </div>
//             <Link id="tittle" to="/pagos">
//               Pagos
//             </Link>
//           </li>

//           <li id="clientes" className="row" onClick={handleClickOcultar} hidden={true} >
//             <div id="icon">
//               <TodayIcon />
//             </div>
//             <Link id="tittle" to="/clientes">
//               Clientes
//             </Link>
//           </li>
//           <li
//            id="asesores" 
//            className="row" 
//            style={{ background:  "white" ,}}
//            onClick={handleClickOcultar} >
//             <div id="icon">
//               <TodayIcon />
//             </div>
//             <Link 
//                style={{ fontSize:"15px",fontWeight: 'bold' }}
//             id="tittle" to="/asesores">
//               Asesores
//             </Link>
//           </li>
//             </>)}
            

    
//           <li
//            className="row" 
//            style={{ background:  "white" ,}}
//            onClick={handleClickSalir}>
//             <div id="icon">
//               <img src={Salir} />
//             </div>
//             <Link
//                 style={{ fontSize:"15px",fontWeight: 'bold' }}
//             id="tittle" to="/salir">
//               Cerrar sesión
//             </Link>
//           </li>
      
//         </ul>
      
//       </div>




//     );
//   }
// }
