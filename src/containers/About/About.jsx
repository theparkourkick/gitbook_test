import React from "react"
import styles from "./About.module.scss"
import Title from "../../components/Title/Title"
import Heading from "../../components/Heading/Heading"
import Paragraph from "../../components/Paragraph/Paragraph"
// import AboutPicture from "../../../static/assets/images/about.png"
import Button from "../../components/Button/Button"
import { StaticQuery, graphql } from "gatsby";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const About = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // console.log(frontmatter)
  return (
    <section id="about" className={` ${styles.aboutSection} ${"section--bg"}`}>
      <Title type="sectionTitle" className={styles.aboutTitle}>
        {/* About Me */}
        {frontmatter.title}
      </Title>
      <Fade left duration="400" fraction={0.5} >
      <img src={frontmatter.image} alt="About" className={styles.backgroundImage}/>
      </Fade>
      <Fade right duration="400" fraction={0.5} delay="200" >
      <div className={styles.block}>
        <Heading className={styles.aboutHeading}>
          {/* Tatjana is */}
          {frontmatter.heading}
          </Heading>
        <Paragraph className={styles.aboutParagraph}>
          {frontmatter.description}
          {/* In my day to day work, I use a mix esearch methods to help of research
          methods to help guide Innovation and strategic desisions esearch
          methods tohelp making by understanding esearchmethods to help consumer
          motivations, needs and behaviours. */}
        </Paragraph>
        <Button className={styles.instagramButton} href={frontmatter.instagramLink} target="_blank">Follow me on Instagram</Button>
      </div>
      </Fade>
    </section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
        frontmatter {
          title
          heading
          description
          instagramLink
          image
        }
      }
    }
  `}
    render={data => <About data={data} {...props} />}
  />
)
