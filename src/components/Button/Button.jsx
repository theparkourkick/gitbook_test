import React from "react"
import styles from "./Button.module.scss"

const button = ({ children, className, href, ...props }) => (
  <a href={href} className={`${className} ${styles.base}`} {...props}>
    {children}
  </a>
)

export default button
