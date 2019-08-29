import React from "react"
import styles from "./Heading.module.scss"

const heading = ({ children, className, ...props }) => {
  return <h2 className={`${styles.heading} ${className}`} {...props} >{children}</h2>
}

export default heading
