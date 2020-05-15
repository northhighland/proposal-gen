import React from 'react'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left">
              Copyright © North Highland 2020
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/company/northhighland/"
                target="new"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a
                className="mr-3"
                href="https://www.northhighland.com/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
