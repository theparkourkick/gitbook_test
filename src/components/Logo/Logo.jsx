import React from "react"
import styles from "./Logo.module.scss"
// import image from "../../../static/assets/images/logo.png"

const logo = ({ className, ...props }) => (
  <img {...props} alt="logo" className={`${styles.logo} ${className}`} />
)

export default logo
