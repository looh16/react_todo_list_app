import React from "react"
import { Outlet } from "react-router-dom"

const About = () => {

  return (
  <div className="about__content">
  <ul className="about__list">
  <Outlet/>
  </ul>
  </div>
)
}
export default About