import React, { useState } from "react"
import styles from "./Project.module.scss"
import Modal from "react-modal"
import Lock from "../../../static/assets/images/lock.png"
import Window from "../../../static/assets/images/panel.svg"
// import WindowHeader from "../../../static/assets/images/ios_bar.png";

Modal.setAppElement("#___gatsby")

const project = ({ heading, subheading, overview, role, link, password, index, openModal}) => {
  // console.log(index)
  // const [state, setState] = useState({
  //   modalIsOpen: false,
  //   inputPassword: '',
  //   inputState: true
  // })

  // console.log(state)

  // const openModal = () => {
  //   setState({ modalIsOpen: true })
  // }

  

  // const handleChange = (event) => {
  //   setState({ inputPassword: event.target.value })
  // }

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   const input = document.getElementById('case-study-input').value;
  //   if (input === password) {
  //     window.open(link, "_blank")
  //   }
  //   // else {
  //   //   setState({ inputState: false })
  //   // }
  // }

  return (
    <div className={styles.block} onClick={() => openModal(index)}>
      <img src={Window} alt="window" className={styles.window} />
      <img src={Lock} alt="lock" className={styles.lock} />
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>{subheading}</p>
      <a href className={styles.link}>
        View case study
      </a>
    </div>
  )
}

export default project;