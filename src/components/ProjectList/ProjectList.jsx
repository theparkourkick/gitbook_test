import React, { useState } from "react"
import styles from "./ProjectList.module.scss"
import Project from "../Project/Project"
import Fade from "react-reveal/Fade"
import ProjectModal from "../ProjectModal/ProjectModal"

const project = ({ data, password, ...props }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [openModalHeading, setOpenModalHeading] = useState("")
  const [modalData, setModalData] = useState({})
  const [dataIndex, setDataIndex] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [errInput, setErrInput] = useState(false);

  // const [state, setState] = useState({
  //   modalIsOpen: false,
  //   openModalHeading: "",
  //   modalData: {},
  //   dataIndex: null,
  // })
  let modal
  if (typeof document !== `undefined`) {
    modal = document.getElementsByClassName("ReactModal__Content")[0]
  }
  // const modal = document.getElementsByClassName('ReactModal__Content')[0];

  const openModal = index => {
    setModalIsOpen(true)
    setModalData(data[index])
    setDataIndex(index)
    // setState({ modalIsOpen: true, modalData: data[index], dataIndex: index, inputValue: '' })
  }

  const closeModal = e => {
    e.stopPropagation()
    setModalIsOpen(false)
    // setState({ modalIsOpen: false })
  }
  // TODO: Check if its possible to retain state (Should be possible)
  const nextCaseStudy = e => {
    if (typeof data[dataIndex + 1] !== "undefined") {
      setModalData(data[dataIndex + 1])
      setDataIndex(dataIndex + 1)
      // setState({ modalData: data[state.dataIndex + 1], modalIsOpen: true })
    } else {
      setModalData(data[0])
      setDataIndex(0)
      // setState({ modalData: data[0], modalIsOpen: true })
    }
    if (typeof document !== `undefined`) {
      document.getElementsByClassName("ReactModal__Content")[0].scrollTop = 0
    }
  }

  const previousCaseStudy = e => {
    if (typeof data[dataIndex - 1] !== "undefined") {
      setModalData(data[dataIndex - 1])
      setDataIndex(dataIndex - 1)
      // setState({ modalData: data[state.dataIndex - 1], modalIsOpen: true })
    } else {
      setModalData(data[2])
      setDataIndex(2)
      // setState({ modalData: data[2], modalIsOpen: true })
    }
    if (typeof document !== `undefined`) {
      document.getElementsByClassName("ReactModal__Content")[0].scrollTop = 0
    }
  }

  const handleChange = event => {
    setInputValue(event.target.value)
    // setState({ inputValue: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (inputValue === password) {
      window.open(data[dataIndex].link, "_blank")
    }else {
      setErrInput(true);
    }
  }

  const items = data.map((item, index) => (
    <Fade delay={250 +(100 * index)}>
      <Project
        heading={item.heading}
        subheading={item.subheading}
        key={index}
        index={index}
        overview={item.overview}
        role={item.role}
        link={item.link}
        password={password}
        openModal={openModal}
      />
    </Fade>
  ))

  return (
    <div {...props}>
      {items}
      <ProjectModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={modalData}
        nextCaseStudy={nextCaseStudy}
        previousCaseStudy={previousCaseStudy}
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errInput={errInput}
      />
    </div>
  )
}

export default project
