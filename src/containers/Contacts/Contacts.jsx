import React from "react"
import styles from "./Contacts.module.scss"
import Heading from "../../components/Heading/Heading"
import Link from "../../components/Link/Link"
import Gallery from "../../components/Gallery/Gallery"
import Paragraph from "../../components/Paragraph/Paragraph"
import { StaticQuery, graphql } from "gatsby"
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Contacts = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <React.Fragment>
      <section
        className={` ${styles.contactsSection} ${"section--bg"}`}
        id="contacts"
      >
        <Gallery className={styles.gallery} data={frontmatter.images} />
        <Heading className={styles.contactsHeading}>
          More
          <br /> About Me
        </Heading>
      </section>
      <footer className={styles.footer}>
        <Reveal effect="fade-bottom" duration="750" fraction={0.6}>
        <Paragraph className={styles.postScriptum}>
          Contact me if you need help with Creative Design and Re-Design,
          Innovation, Strategy, User Centered Design, Design Thinking,
          Management and UX Development, Service Design, Usability or Product
          Design.<span role="img" aria-label="heart">🧡</span>
        </Paragraph>
        </Reveal>
        <Reveal effect="fade-bottom" duration="750" delay="300">
        <div className={styles.linkContainer}>
          <Link
            to={frontmatter.linkedInLink}
            type="footer"
            className={styles.footerLink}
          >
            Linkedin
          </Link>
          <Link
            to={frontmatter.instagramLink}
            type="footer"
            className={styles.footerLink}
          >
            Instagram
          </Link>
          <Link to="linkedin.com" type="footer" className={styles.footerLink}>
            {frontmatter.email}
          </Link>
          <Link to="linkedin.com" type="footer" className={styles.footerLink}>
            {frontmatter.phone}
          </Link>
        </div>
        </Reveal>
      </footer>
    </React.Fragment>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "contacts" } }) {
          frontmatter {
            title
            instagramLink
            linkedInLink
            email
            phone
            images {
              image
            }
          }
        }
      }
    `}
    render={data => <Contacts data={data} {...props} />}
  />
)
