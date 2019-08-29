import React from "react"
import Heading from "../../components/Heading/Heading"
import Logo from "../../components/Logo/Logo"
import Paragraph from "../../components/Paragraph/Paragraph"
import Title from "../../components/Title/Title"
import styles from "./Introduction.module.scss"
import { StaticQuery, graphql } from "gatsby"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal"

const Introduction = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <section className={styles.introductionSection} id="introduction">
      <Title type="sectionTitle" className={styles.sectionTitle}>
        {frontmatter.title}
      </Title>
      <div className={styles.sectionLeft}>
        <Logo className={styles.logo} src={frontmatter.logo} />
        <div className={styles.text}>
          <Title type="name" className={styles.name}>
            {frontmatter.name}
          </Title>
          <Reveal effect="fade-bottom" duration="750">
            <Heading
              className={styles.bio}
              dangerouslySetInnerHTML={{ __html: frontmatter.heading }}
            />
          </Reveal>
          <Reveal delay="300" effect="fade-bottom" duration="750">
            <Paragraph className={styles.description}>
              {frontmatter.subheading}
            </Paragraph>
          </Reveal>
        </div>
        <div className={styles.gradientBox} />
      </div>
      <div className={styles.sectionRight}>
        <div className={styles.sectionRightContainer}>
          <div className={styles.gradientBox} />
          <img
            src={frontmatter.image}
            alt="Profile"
            className={styles.profilePicture}
          />
        </div>
      </div>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "introduction" } }) {
          frontmatter {
            title
            name
            heading
            subheading
            image
            logo
          }
        }
      }
    `}
    render={data => <Introduction data={data} {...props} />}
  />
)
