import React from 'react';
import styles from "./index.module.scss";
import { extractClass } from "../../../../helpers/helpers";

type Link = {
  text: string;
  url: string;
};

type NavbarProps = {
  links: Link[];
  active: boolean;
  classname?: string;
  
};

const Navbar: React.FC<NavbarProps> = ({ 
    links,
     active,
     classname = "" }) => {
  const navbarClass = extractClass(styles, "navbar");
  const navbarLinkClass = extractClass(styles, "navbarLink");
  const navbarLinkActiveClass = extractClass(styles, "navbarLinkActive");

  return (
    <nav className={`${navbarClass} ${classname}`}>
      <ul className={styles.navbarList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navbarItem}>
            <a
              href={link.url}
              className={active ? navbarLinkActiveClass : navbarLinkClass}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;