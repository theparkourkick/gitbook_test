import React from "react";
import Button from "../../components/Button/Button";
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import Heading from "../../components/Heading/Heading";
import Title from "../../components/Title/Title";
import styles from "./Experience.module.scss";
import { StaticQuery, graphql } from "gatsby";
// import Fade from 'react-reveal/Fade';
import Reveal from "react-reveal/Reveal"

const Experience = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <section className={styles.experienceSection} id="experience">
      <Reveal delay="100" fraction={1} effect="fade-bottom" duration="750">
      <Title type="sectionTitle" className={styles.sectionTitle}>
        {frontmatter.title}
      </Title>
      </Reveal>
      <Reveal delay="200" fraction={1} effect="fade-bottom" duration="750">
      <Heading className={styles.heading}>
        {frontmatter.heading}
      </Heading>
      </Reveal>
      <ExperienceList className={styles.experienceList} data={frontmatter.experience}/>
      <Reveal delay="250" fraction={1} effect="fade-bottom" duration="750">
      <Button className={styles.resume} href={frontmatter.resumeLink} target="_blank">Download resume .pdf</Button>
      </Reveal>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "experience" } }) {
        frontmatter {
          title
          heading
          resumeLink
          experience {
            company
            position
            timeline
          }
        }
      }
    }
  `}
    render={data => <Experience data={data} {...props} />}
  />
)
