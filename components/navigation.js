/** @format */

import Link from "next/link";
const navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">MenuS</Link>
      </li>
      <li>
        <Link href="/about">Mi cuenta</Link>
      </li>
      <li>
        <Link href="/services">Carrito</Link>
      </li>
      <li>
        <Link href="/Intranet">Login</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/login">Login</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/principal">Principal</Link>
      </li>
      <li>
        <Link href="/Intranet/vistas/productos">Productos</Link>
      </li>

      <li>
        <Link href="/Intranet/vistas/categorias">Productos</Link>
      </li>
    </ul>
  );
};
export default navigation;
