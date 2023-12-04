import "./Button.scss";

import React from 'react'

type ButtonPropType = {
    color: string,
    onClick?: () => void,
    children: React.ReactNode
}

const Button: React.FC<ButtonPropType> = ({color, onClick, children}) => {
  return (
    <button style={{backgroundColor: color}} className="button">
        {children}
    </button>
  )
}

export default Button;
