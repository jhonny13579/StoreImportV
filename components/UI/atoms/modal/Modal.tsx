import classNames from 'classnames'
import type { ReactNode } from 'react'
import styles from './index.module.scss'
import { extractClass } from "../../../../helpers/helpers";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

 const style: { [key: string]: string } | any = styles

export interface Props {
  classname?: string
  children: ReactNode
  props?: any
  show?: any
  onHide?: any
  onGuardar?: boolean
  onclickguardar?: any
  titulo?: string
  size?: string
  active: boolean;
}

const Modals = ({
  classname = '',
  children,
  props,
  show,
  onHide,
  onGuardar,
  onclickguardar,
  titulo,
  size,

  active,
}: Props) => {
  const classprops: string = classNames(extractClass(styles, classname));
  return (
    <Modal
    className={active ? classprops : classname}
      {...props}
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {onGuardar ? <Button onClick={onclickguardar}>Guardar</Button> : ''}
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modals
