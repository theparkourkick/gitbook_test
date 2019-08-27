import React from "react";
// import styles from "./ExperienceList.module.scss";
import ExperienceBlock from "../ExperienceBlock/ExperienceBlock";
// import Fade from 'react-reveal/Fade';
import Reveal from "react-reveal/Reveal"
const experienceList = ({data, ...props}) => {

    const items = data.map((item, index) =>
    <Reveal fraction={1} effect="fade-bottom" duration="750" delay={150 * index}>
    <ExperienceBlock
        company={item.company}
        position={item.position}
        timeline={item.timeline}
        key={index}
    />
    </Reveal>
    );

    return (
        <div {...props}>
            {items}
        </div>
    )
}

export default experienceList;