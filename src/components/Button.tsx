import { ButtonHTMLAttributes } from "react"
import "./Button.scss"

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`Button ${props.className ?? ""}`}>
      {props.children}
    </button>
  )
}

export default Button
