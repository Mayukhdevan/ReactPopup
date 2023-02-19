import Header from '../Header'
import './index.css'

const About = () => (
  <div className="main-bg-container">
    <Header />
    <div className="responsive-container">
      <img
        className="route-img-sm"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <img
        className="route-img-lg"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
