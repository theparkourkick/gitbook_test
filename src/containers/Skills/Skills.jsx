import React from "react"
import styles from "./Skills.module.scss"
import Title from "../../components/Title/Title"
import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button"
import Paragraph from "../../components/Paragraph/Paragraph"
import { StaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import Reveal from "react-reveal/Reveal"

const Skills = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <section
      className={` ${styles.skillsSection} ${"section--bg"}`}
      id="skills"
    >
      <Title type="sectionTitle" className={styles.sectionTitle}>
        {frontmatter.title}
      </Title>
      {/* <Fade left> */}
      <Reveal effect="left-to-right" duration="500">
        <div className={styles.sectionLeft}>
          {/* <Fade left delay={500}> */}
          <Reveal effect="left-to-right" duration="500" delay="250">
            <div className={styles.linkedInBlock}>
              <Reveal delay="750" effect="fade-bottom" duration="750">
                <Heading className={styles.linkedInHeading}>
                  {frontmatter.subheading}
                </Heading>
              </Reveal>

              {/* <Reveal delay="1500" effect="fade-bottom" duration="750"> */}
              <Fade delay="750" duration="500">
              <Button
                className={styles.linkedInButton}
                href={frontmatter.linkedInLink}
                target="_blank"
              >
                Add me on LinkedIn
              </Button>
              </Fade>
              {/* </Reveal> */}
            </div>
            </Reveal>
          {/* </Fade> */}
        </div>
        </Reveal>
      {/* </Fade> */}
      <div className={styles.sectionRight}>
        {/* <Fade delay={800}> */}
        <Reveal effect="fade-bottom" duration="750">
          <Heading
            className={styles.skillsHeading}
            dangerouslySetInnerHTML={{ __html: frontmatter.heading }}
          >
            {/* <Markup content={frontmatter.heading} /> */}
            {/* I work closely with teams and <span>individualy</span> */}
          </Heading>
          </Reveal>
        {/* </Fade> */}
        {/* <Fade delay={1000} fraction={1}> */}
        <Reveal delay="600" effect="fade-bottom" duration="750">
          <Paragraph className={styles.skillsParagraph}>
            {frontmatter.description}
            {/* In my day to day work, I use a mix esearch methods to help of research
          methods to help guide Innovation and strategic desisions esearch
          methods to help making by understanding esearch methods to help
          consumer motivations, needs and behaviours. esearch methods to help
          methods to help maki guide Innovation and strategic */}
          </Paragraph>
          </Reveal>
        {/* </Fade> */}
      </div>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "skills" } }) {
          frontmatter {
            title
            heading
            subheading
            description
            linkedInLink
          }
        }
      }
    `}
    render={data => <Skills data={data} {...props} />}
  />
)
