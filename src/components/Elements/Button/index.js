import React from 'react'

import classNames from 'classnames'

import './index.scss'

const Button = ({
  children, primary, secondary, className = '', ...restProps
}) => {
  const btnClass = classNames(
    className, {
      'elem-btn': true,
      'elem-btn--primary': primary,
      'elem-btn--secondary': secondary,
    },
  )
  return (
    <button
      type="button"
      className={btnClass}
      {...restProps}
    >
      {children || 'Button'}
    </button>
  )
}

export default Button
