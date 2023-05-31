import classNames from 'classnames'
import type { CSSProperties } from 'react'
// import { extractClass } from '../../../../helpers'
// import styles from './index.module.css'

type Props = {
  type: string
  name: string
  id: string
  classname?: string
  onchange?: any
  disabled?: boolean
  placeholder?: string
  defaultValue?: string
  style?: CSSProperties
  min?: any
  max?: any
  value?: any
  readOnly?: any
  onClick?: any
	pattern?: any
  
}

const Input = ({
  type,
  name,
  id,
  classname = '',
  onchange,
  disabled = false,
  placeholder = '',
  defaultValue,
  style,
  min,
  max,
  value,
  readOnly,
  onClick,
	pattern,
}: Props) => {
  const classprops: string = classNames(
    type === 'checkbox' ? 'form-check-input' : 'form-control',
    classname
    // extractClass(styles, classname)
  )

  return (
    <input
      id={id}
      type={type}
      name={name}
      className={classprops}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onchange}
      defaultValue={defaultValue}
      style={style}
      min={min}
      max={max}
      value={value}
      readOnly={readOnly}
      onClick={onClick}
			pattern={pattern}
    />
  )
}

export default Input
