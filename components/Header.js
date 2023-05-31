import styles from "../styles/Header.module.css"
import React, { useState,useEffect } from 'react';


import { apiCategoria , apiProductos,apiMarcas} from "../pages/api/index";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    useEffect(() => {

      const prom = apiProductos.BylistProductoNegocio(1);
      prom.then((resp1) => { 
        console.log("BylistNegocio", resp1);
       
      });

      // const promise1 = apiProductos.BylistProductoInactive(1);
      // promise1.then((resp1) => { 
      //   console.log("BylistInactivo", resp1);
       
      // });

      
      const promise = apiMarcas.BylistMarca();
     
      promise.then((respu) => {
        console.log("BylistMarquita", respu);
      
      });

        const proms = apiCategoria.BylistCategory();
       
        proms.then((resp) => {
          console.log("BylistCategoryaaa", resp);
          setCategories(resp);
        });


        const proms1 = apiProductos.BylistProductoImage(1);
        proms1.then((resp1) => { 
          console.log("BylistProductoooxx", resp1);
         
        });

        const obj ={
          IDProducto:'3',
          IDNegocio: 1
        }
        const proms2 =  apiProductos.ByListProducRecomendado(obj);
  
        proms2.then((resp2) => {
          console.log("bYlITrECOMNDADO", resp2);
         
        });



        const proms3 = apiProductos.BylistProductUpdate(0,2);
        proms3.then((resp3) => { 
          console.log("BylistUpdate", resp3);
         
        });

      }, []);
    return (

        <header className={styles.mainheader}>
          <div className={styles.containerheader}>
            <nav className={styles.navigation}>

                <div className={styles.menu} onClick={toggleMenu}>  
                    <img className={styles.mlog} src="/img/bars-solid.svg" alt="Icon Menu"/>
                    <p className={styles.menup} >Menús</p>
                </div>


                {menuOpen && (
            <ul className={styles.menuItems}>
              {categories.map((category) => (
                <li key={category.Codigo}>{category.Name}</li>
              ))}
            </ul>
          )}
      
                <div className={styles.logo}>
                     <a  href="#"><img  src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/LogoWebEnero_135x.png?v=1673452602" alt="Icon Menu"/></a>
                </div>

                <div className={styles.mainbuscar}>
                    <div className={styles.buscar}>
                         <input type="search" placeholder="Buscar..." />
                        <a href="#"><img className={styles.searchicon} src="/img/search-icon.svg" alt="Search Icon"/></a>
                    </div>
                </div>
                <div class={styles.navmainlogin}>
                    <div class={styles.navlogincarrito}>
                        <p className={styles.carp}>Iniciar Sesión / Registrarse</p>
                        <div className={styles.myaccount}>
                              <img className={styles.flecha} src="/img/flecha-navegar.png" />
                              <p className={styles.carp2}>Mi cuenta</p>
                        </div>
                        <img className={styles.lo2} src="/img/cart-icon.svg" alt="Cart Icon"/>
                    </div>
                </div>
           </nav>
          </div>
        </header>

    )


}
export default Header