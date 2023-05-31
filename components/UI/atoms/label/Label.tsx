/** @format */

import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./index.module.scss";

import { extractClass } from "../../../../helpers/helpers";

const style: { [key: string]: string } = styles;

export interface Props {
  classname?: string;
  children: ReactNode;
  idFor?: string;
  active: boolean;
}

const Label = ({
  classname = "",
  children = "label text",
  idFor,
  active,
}: Props) => {
  const classprops: string = classNames(extractClass(styles, classname));
  return (
    <label
     htmlFor={idFor} 
     className={active ? classprops : classname}>
      {children}
    </label>
  );
};

export default Label;
