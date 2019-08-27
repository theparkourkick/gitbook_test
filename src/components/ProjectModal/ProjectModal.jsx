import React from "react"
import styles from "./ProjectModal.module.scss";
import Modal from "react-modal"
import Lock from "../../../static/assets/images/lock.png"
import Reveal from "react-reveal/Reveal";

const projectModal = ({modalIsOpen, closeModal, data = {}, nextCaseStudy, previousCaseStudy, inputValue, handleChange, handleSubmit, errInput
 }) => {
    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Case Study Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.windowHeader}>
          <button className={styles.windowButton} onClick={closeModal}/>
          <button className={styles.windowButton} />
          <button className={styles.windowButton} />
        </div>
        <div className={styles.modalHeader}>
        {/* <Reveal delay="100" effect="fade-bottom" duration="750"> */}
          <h2 className={styles.modalHeading}>{data.heading}</h2>
          {/* </Reveal> */}
          <p className={styles.modalSubheading}>{data.subheading}</p>
        </div>
        <div className={styles.modalPassword}>
          <img src={Lock} alt="lock" className={styles.modalLock} />
          <form
            onSubmit={handleSubmit}
            // className={styles.modalForm}
            className={`${styles.modalForm} ${
              errInput === true ? styles.formError : ""
            }`}
          >
            <input
              type="password"
              className={styles.modalInput}
              id="case-study-input"
              placeholder="Password"
              value={inputValue}
              onChange={handleChange}
            />
            <button type="submit" className={styles.modalButton} />
          </form>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyText}>
            <div className={styles.modalBodyOverview}>
              <h2 className={styles.modalBodyHeading}>Overview</h2>
              <p className={styles.modalBodySubheading}>
                {data.overview}
              </p>
            </div>
            <div className={styles.modalBodyRole}>
              <h2 className={styles.modalBodyHeading}>My Role</h2>
              <p className={styles.modalBodySubheading}>
                {data.role}
              </p>
            </div>
            <div className={styles.modalButtons}>
                {/* TODO: change to buttons */}
              <a href onClick={previousCaseStudy}>Previous</a>
              <a href onClick={nextCaseStudy}>Next</a>
            </div>
          </div>
        </div>
      </Modal>
    )
}

export default projectModal;