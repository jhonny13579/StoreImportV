/** @format */

import React, { useState, useEffect } from "react";
import styles from "../styles/Body.module.css";
import { apiMarcas } from "../pages/api/index";
const Stores = () => {
  useEffect(() => {
    // const proms = apiMarcas.BylistMarca();
    // proms.then((resp) => {
    //   console.log("BylistMarca", resp);
    // });
  }, []);

  return (
    <div className={styles.containerbody}>
      <nav className={styles.navigation2}>
        <h2 className={styles.colec}>Colecciones</h2>
        <nav className={styles.mainbody}>
          <div class="contenedor">
            <img
              className={styles.funko}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-1_1d595bdd-61dc-4c9c-9213-66461fd68b15_300x.jpg?v=1650745653"
            />
            <p className={styles.text1}>No Stock</p>
          </div>

          <div>
            <img
              className={styles.funko22}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-18_300x.jpg?v=1650751985"
            />
            <p className={styles.text2}>No Stock</p>
          </div>

          <div>
            <img
              className={styles.funko33}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-2_bc4295e6-4548-4316-bb17-1f33bdae53bf_300x.jpg?v=1650746536"
            />
            <p className={styles.text3}>Aun Stock</p>
          </div>

          <div>
            <img
              className={styles.funko44}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-3_300x.jpg?v=1650747293"
            />
            <p className={styles.text4}>Aun Stock</p>
          </div>

          <div>
            <img
              className={styles.funko55}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-12_300x.jpg?v=1650749917"
            />
            <p className={styles.text5}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
          <div>
            <img
              className={styles.funko66}
              src="https://cdn.shopify.com/s/files/1/0223/3912/5322/files/coleccion-prueba-4_300x.jpg?v=1650747401"
            />
            <p className={styles.text6}>Aun Stock</p>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Stores;
