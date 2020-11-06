import React from 'react'

import classNames from 'classnames'

import './index.scss'

const Input = ({
  type = 'text', disabled, className = '', ...restProps
}) => {
  const inptClass = classNames(
    className, {
      'elem-inpt': true,
      'elem-inpt--disabled': disabled,
    },
  )
  return (
    <input
      type={type}
      disabled={disabled}
      className={inptClass}
      {...restProps}
    />
  )
}

export default Input
