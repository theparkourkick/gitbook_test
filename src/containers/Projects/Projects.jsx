import React from "react"
import Title from "../../components/Title/Title"
import Heading from "../../components/Heading/Heading"
import Paragraph from "../../components/Paragraph/Paragraph"
import ProjectList from "../../components/ProjectList/ProjectList"
import styles from "./Projects.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal";

const Projects = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <section className={styles.projectSection} id="projects">
      <Title type="sectionTitle" className={styles.projectTitle}>
        {frontmatter.title}
      </Title>
      <Reveal effect="fade-bottom" duration="750">
        <Heading className={styles.projectHeading}>
          {frontmatter.heading}
        </Heading>
        </Reveal>
      {/* <Fade delay={500} fraction={1}> */}
      <Reveal effect="fade-bottom" duration="750" delay="250">
        <Paragraph className={styles.projectParagraph}>
          {frontmatter.subheading}
        </Paragraph>
      </Reveal>
      {/* </Fade> */}
      <ProjectList
        data={frontmatter.projects}
        className={styles.projectList}
        password={frontmatter.password}
      />
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "projects" } }) {
          frontmatter {
            title
            heading
            subheading
            password
            projects {
              heading
              subheading
              overview
              role
              link
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
)
