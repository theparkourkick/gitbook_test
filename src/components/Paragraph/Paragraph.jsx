import React from "react"
import styles from "./Paragraph.module.scss"

const paragraph = ({ children, className }) => {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>
}

export default paragraph
