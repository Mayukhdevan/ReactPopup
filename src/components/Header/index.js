import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="nav-links">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="ham-menu" />
          </button>
        }
        modal
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-btn"
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="nav-container">
              <Link to="/" className="nav-links" onClick={() => close()}>
                <li className="nav-item">
                  <AiFillHome className="nav-icon" />
                  <h1 className="nav-text">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="nav-links" onClick={() => close()}>
                <li className="nav-item">
                  <BsInfoCircleFill className="nav-icon" />
                  <h1 className="nav-text">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
