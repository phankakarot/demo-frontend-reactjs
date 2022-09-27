import React from 'react'
import { IMAGE_DATA } from '../../assests/images'
import './Navigation.css'

const Navigation = () => {

  const navigateList = ['Home', 'About', 'Price', 'Testimonials', 'Contact']
  
  return (
    <header id="header" className="transparent-header dark no-sticky" data-responsive-class="dark">
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            {/* Logo  ============================================= */}
            <div id="logo">
              <a href="index.html" className="standard-logo"><img src={IMAGE_DATA.logo.primary} alt="Canvas Logo" /></a>
              <a href="index.html" className="retina-logo"><img src={IMAGE_DATA.logo.primary} alt="Canvas Logo" /></a>
            </div>{/* #logo end */}
            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" /><path d="m 30,50 h 40" /><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" /></svg>
            </div>
            {/* Primary Navigation  ============================================= */}
            <nav className="primary-menu not-dark">
              <ul className="menu-container one-page-menu" data-easing="easeInOutExpo" data-speed={1250} data-offset={0}>
                {navigateList.map((item, index) => {
                  return <li key={`menu-item-${index}`} className="menu-item current">
                    <a className="menu-link" href="./" data-href="#slider">
                      <div>{item}</div>
                    </a>
                  </li>
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone" />
    </header>
  )
}

export default Navigation