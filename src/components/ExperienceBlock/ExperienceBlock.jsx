import React from "react";
import styles from "./ExperienceBlock.module.scss";

const experienceBlock = ({company, position, timeline}) => {
    return (
        <div className={styles.block}>
            <h2 className={styles.company}>{company}</h2>
            <h3 className={styles.position}>{position}</h3>
            <p className={styles.timeline}>{timeline}</p>
        </div>
    )
}

export default experienceBlock;