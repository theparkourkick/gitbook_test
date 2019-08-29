import React from "react"
import styles from "./Nav.module.scss"
import Link from "../Link/Link"
import "./Nav.scss"

// const nav = ({ className }) => {
//   let selectedMenu = "introduction";
//   // Detect request animation frame
//   var scroll =
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     // IE Fallback, you can even fallback to onscroll
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60)
//     }
//   var lastPosition = -1

//   // my Variables
//   var lastSection = false
//   var replaceItemTop = -1
//   var replaceItemBottom = -1
//   var replaceItemHeight = -1

//   // The Scroll Function
//   function loop() {
//     var top = window.pageYOffset
//     // my variables

//     // my sections to calculate stuff
//     var sections = document.querySelectorAll("section")
//     var replaceContainer = document.querySelectorAll(".js-replace")
//     var replaceItem = document.querySelectorAll(".js-replace__item")

//     if (replaceItem.length > 0) {
//       // get top position of item from container, because image might not have loaded
//       replaceItemTop = parseInt(replaceContainer[0].getBoundingClientRect().top)
//       replaceItemHeight = replaceItem[0].offsetHeight
//       replaceItemBottom = replaceItemTop + replaceItemHeight
//     }

//     var sectionTop = -1
//     var sectionBottom = -1
//     var currentSection = -1

//     // Fire when needed
//     if (lastPosition == window.pageYOffset) {
//       scroll(loop)
//       return false
//     } else {
//       lastPosition = window.pageYOffset

//       // Your Function
//       Array.prototype.forEach.call(sections, function(el, i) {
//         sectionTop = parseInt(el.getBoundingClientRect().top)
//         sectionBottom = parseInt(el.getBoundingClientRect().bottom)

//         // active section
//         if (sectionTop <= replaceItemBottom && sectionBottom > replaceItemTop) {
//           // check if current section has bg
//           currentSection = el.classList.contains("section--bg")

//           // switch class depending on background image
//           if (currentSection) {
//             replaceContainer[0].classList.remove("js-replace--reverse")
//           } else {
//             replaceContainer[0].classList.add("js-replace--reverse")
//           }
//         }
//         // end active section

//         // if active Section hits replace area
//         if (replaceItemTop < sectionTop && sectionTop <= replaceItemBottom) {
//           // animate only, if section background changed
//           if (currentSection != lastSection) {
//             document.documentElement.style.setProperty(
//               "--replace-offset",
//               (100 / replaceItemHeight) *
//                 parseInt(sectionTop - replaceItemTop) +
//                 "%"
//             )
//           }
//         }
//         // end active section in replace area

//         // if section above replace area
//         if (replaceItemTop >= sectionTop) {
//           // set offset to 0 if you scroll too fast
//           document.documentElement.style.setProperty(
//             "--replace-offset",
//             0 + "%"
//           )
//           // set last section to current section
//           lastSection = currentSection
//         }
//       })
//     }

//     // Recall the loop
//     scroll(loop)
//   }

//   // Call the loop for the first time
//   loop()

//   window.onresize = function(event) {
//     loop()
//   }

//   window.onscroll = (e) => {

//     var sections = document.querySelectorAll("section")
//     var lastPosition = window.pageYOffset;

//     sections.forEach((el, i) => {
//       var sectionTop = parseInt(el.getBoundingClientRect().top);
//       var sectionBottom = parseInt(el.getBoundingClientRect().bottom);
//       if(lastPosition > sectionTop && lastPosition < sectionBottom) {
//         selectedMenu = el.id;
//         console.log(selectedMenu)
//       }
//       // console.log("lastPosition: " + lastPosition, "sectionTop: " + sectionTop, "sectionBottom: " + sectionBottom);
//     })
//     // console.log(lastPosition)
//   }

//   return (
//     <header className="header">
//       <div className="header__logo  js-replace">
//         <div className="js-replace__item  js-replace__item--active">
//           <div className="js-replace__content">
//             <aside className="nav">
//               <Link type="nav" className={selectedMenu === "contacts" ? 'active' : ''}>Contacts</Link>
//               <Link type="nav" className={selectedMenu === "about" ? 'active' : ''}>About me</Link>
//               <Link type="nav" className={selectedMenu === "projects" ? 'active' : ''}>Projects</Link>
//               <Link type="nav" className={selectedMenu === "skills" ? 'active' : ''}>Skills</Link>
//               <Link type="nav" className={selectedMenu === "experience" ? 'active' : ''}>Work experience</Link>
//               <Link type="nav" className={selectedMenu === "introduction" ? 'active' : ''}>Intro</Link>
//             </aside>
//           </div>
//         </div>

//         <div className="js-replace__item">
//           <div className="js-replace__content">
//             <aside className="nav--invert">
//               <Link type="nav" className={selectedMenu === "contacts" ? 'active' : ''}>Contacts</Link>
//               <Link type="nav" className={selectedMenu === "about" ? 'active' : ''}>About me</Link>
//               <Link type="nav" className={selectedMenu === "projects" ? 'active' : ''}>Projects</Link>
//               <Link type="nav" className={selectedMenu === "skills" ? 'active' : ''}>Skills</Link>
//               <Link type="nav" className={selectedMenu === "experience" ? 'active' : ''}>Work experience</Link>
//               <Link type="nav" className={selectedMenu === "introduction" ? 'active' : ''}>Intro</Link>
//             </aside>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default nav

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: "introduction",
    }
  }

  componentDidMount = () => {
    var scroll =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // IE Fallback, you can even fallback to onscroll
      function(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    var lastPosition = -1

    // my Variables
    var lastSection = false
    var replaceItemTop = -1
    var replaceItemBottom = -1
    var replaceItemHeight = -1

    function loop() {
      var top = window.pageYOffset
      // my variables

      // my sections to calculate stuff
      var sections = document.querySelectorAll("section")
      var replaceContainer = document.querySelectorAll(".js-replace")
      var replaceItem = document.querySelectorAll(".js-replace__item")

      if (replaceItem.length > 0) {
        // get top position of item from container, because image might not have loaded
        replaceItemTop = parseInt(
          replaceContainer[0].getBoundingClientRect().top
        )
        replaceItemHeight = replaceItem[0].offsetHeight
        replaceItemBottom = replaceItemTop + replaceItemHeight
      }

      var sectionTop = -1
      var sectionBottom = -1
      var currentSection = -1

      // Fire when needed
      if (lastPosition == window.pageYOffset) {
        scroll(loop)
        return false
      } else {
        lastPosition = window.pageYOffset

        // Your Function
        Array.prototype.forEach.call(sections, function(el, i) {
          sectionTop = parseInt(el.getBoundingClientRect().top)
          sectionBottom = parseInt(el.getBoundingClientRect().bottom)

          // active section
          if (
            sectionTop <= replaceItemBottom &&
            sectionBottom > replaceItemTop
          ) {
            // check if current section has bg
            currentSection = el.classList.contains("section--bg")

            // switch class depending on background image
            if (currentSection) {
              replaceContainer[0].classList.remove("js-replace--reverse")
            } else {
              replaceContainer[0].classList.add("js-replace--reverse")
            }
          }
          // end active section

          // if active Section hits replace area
          if (replaceItemTop < sectionTop && sectionTop <= replaceItemBottom) {
            // animate only, if section background changed
            if (currentSection != lastSection) {
              document.documentElement.style.setProperty(
                "--replace-offset",
                (100 / replaceItemHeight) *
                  parseInt(sectionTop - replaceItemTop) +
                  "%"
              )
            }
          }
          // end active section in replace area

          // if section above replace area
          if (replaceItemTop >= sectionTop) {
            // set offset to 0 if you scroll too fast
            document.documentElement.style.setProperty(
              "--replace-offset",
              0 + "%"
            )
            // set last section to current section
            lastSection = currentSection
          }
        })
      }

      // Recall the loop
      scroll(loop)
    }

    loop()

    window.onresize = function(event) {
      loop()
    }

    window.onscroll = e => {
      var sections = document.querySelectorAll("section")
      var lastPosition = window.pageYOffset

      sections.forEach((el, i) => {
        var sectionTop = parseInt(el.getBoundingClientRect().top)
        var sectionBottom = parseInt(el.getBoundingClientRect().bottom)

        if (sectionTop < 40) {
          this.setState({ selectedMenu: el.id })
        }
        if (el.id === "contacts" && sectionTop < 400) {
          // console.log(sectionTop)
          this.setState({ selectedMenu: el.id })
        }
        // console.log("lastPosition: " + lastPosition, "sectionTop: " + sectionTop, "sectionBottom: " + sectionBottom);
      })
      // console.log(lastPosition)
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo  js-replace">
          <div className="js-replace__item  js-replace__item--active">
            <div className="js-replace__content">
              <aside className="nav">
                <Link
                  type="nav"
                  to="/#contacts"
                  className={
                    this.state.selectedMenu === "contacts" ? "active" : ""
                  }
                >
                  Contacts
                </Link>
                <Link
                  type="nav"
                  to="/#about"
                  className={
                    this.state.selectedMenu === "about" ? "active" : ""
                  }
                >
                  About me
                </Link>
                <Link
                  type="nav"
                  to="/#projects"
                  className={
                    this.state.selectedMenu === "projects" ? "active" : ""
                  }
                >
                  Projects
                </Link>
                <Link
                  type="nav"
                  to="/#skills"
                  className={
                    this.state.selectedMenu === "skills" ? "active" : ""
                  }
                >
                  Skills
                </Link>
                <Link
                  type="nav"
                  to="/#experience"
                  className={
                    this.state.selectedMenu === "experience" ? "active" : ""
                  }
                >
                  Work experience
                </Link>
                <Link
                  to="/#introduction"
                  type="nav"
                  className={
                    this.state.selectedMenu === "introduction" ? "active" : ""
                  }
                >
                  Intro
                </Link>
              </aside>
            </div>
          </div>

          <div className="js-replace__item">
            <div className="js-replace__content">
              <aside className="nav--invert">
                <Link
                  type="nav"
                  to="/#contacts"
                  className={
                    this.state.selectedMenu === "contacts" ? "active" : ""
                  }
                >
                  Contacts
                </Link>
                <Link
                  type="nav"
                  to="/#about"
                  className={
                    this.state.selectedMenu === "about" ? "active" : ""
                  }
                >
                  About me
                </Link>
                <Link
                  to="/#projects"
                  type="nav"
                  className={
                    this.state.selectedMenu === "projects" ? "active" : ""
                  }
                >
                  Projects
                </Link>
                <Link
                  type="nav"
                  to="/#skills"
                  className={
                    this.state.selectedMenu === "skills" ? "active" : ""
                  }
                >
                  Skills
                </Link>
                <Link
                  type="nav"
                  to="/#experience"
                  className={
                    this.state.selectedMenu === "experience" ? "active" : ""
                  }
                >
                  Work experience
                </Link>
                <Link
                  type="nav"
                  to="/#introduction"
                  className={
                    this.state.selectedMenu === "introduction" ? "active" : ""
                  }
                >
                  Intro
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav
