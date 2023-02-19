import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-bg-container">
    <Header />
    <div className="responsive-container">
      <img
        className="route-img-sm"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="route-img-lg"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
