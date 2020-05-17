import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import logo from '../img/nh-logo.png'
/* eslint-disable */

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="dark" dark expand="lg" className="fixed-top" id="mainNav">
        <div className="container">
          <NavbarBrand href="/" className="js-scroll-trigger">
            <img src={logo} alt="logo" className="nh-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar id="navbarResponsive">
            <Nav className="navbar-nav text-uppercase ml-auto" navbar>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#MVP">MVP</NavLink>
              </NavItem>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#how">How</NavLink>
              </NavItem>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#how">Solutions</NavLink>
              </NavItem>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#team">Team and Cost</NavLink>
              </NavItem>
              <NavItem className="nav-link js-scroll-trigger">
                <NavLink href="#about">About Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Example
