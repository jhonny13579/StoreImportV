import { ReactNode } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

const style: { [key: string]: string } = styles

export interface Props {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  classname?: string
  onClick?: (e: any) => any
}

const Button = ({
  type = 'button',
  children,
  classname = '',
  onClick,
}: Props) => {
  const classprops: string = classNames(
    style[classname] ? style[classname] : classname
  )

  return (
    <button
      type={type}
      className={classprops}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button