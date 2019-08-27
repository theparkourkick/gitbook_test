import React from "react"
import Introduction from "../containers/Introduction/Introduction"
import Experience from "../containers/Experience/Experience"
import Skills from "../containers/Skills/Skills"
import Projects from "../containers/Projects/Projects"
import About from "../containers/About/About"
import Contacts from "../containers/Contacts/Contacts"
import Nav from "../components/Nav/Nav"
import { Helmet } from "react-helmet"

//Import Fonts file
import "../styles/fonts.scss"

//CSS reset file
import "../styles/reset.scss"

//CSS animation file
import "../styles/animations.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default () => {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>tatjana volbeke</title>
        </Helmet>
      <Nav />
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Contacts />
    </React.Fragment>
  )
}
