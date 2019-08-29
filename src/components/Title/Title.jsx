import React from "react"
import styles from "./Title.module.scss";

const title = ({ children, className, type }) => {
  return <h2 className={`${className} ${styles[type]}`}>{children}</h2>
}

export default title;