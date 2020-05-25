import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import ModalThumbImg from '../components/ModalThumbImg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function ModalGrid(props) {
  const gridItems = props.gridItems
  const [modal1, setModal1] = useState(false)
  const toggle1 = () => setModal1(!modal1)

  return (
    <div className="row">
      {gridItems.map((item) => (
        <div key={item.heading} className="col-lg-4 col-sm-6 mb-4">
          <div>
            <div className="portfolio-item">
              <div
                className="portfolio-link"
                data-toggle="modal"
                onClick={toggle1}>
                <ModalThumbImg imageInfo={item} />
              </div>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{item.heading}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {item.subtitle}
                </div>
              </div>
            </div>
          </div>
          <Modal
            zIndex={2000}
            centered
            size="lg"
            isOpen={modal1}
            toggle={toggle1}>
            <ModalHeader toggle={toggle1}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">{item.heading}</h2>
                      <p className="item-intro text-muted">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <h5>Challenge</h5>
              <p>
                Delta wanted to develop a web experience that showcased its
                fresh approach to storytelling, enabling key audiences to a
                quicker, more intuitive way to find, publish, and share news
                about Delta and the airline industry.
              </p>
              <h5>Approach</h5>
              <p>
                In collaboration with the Delta team, North Highland created the
                vision for the “News Hub,” a digital news site with
                multi-platform and social capabilities that uses videos, images,
                and graphics to tell compelling stories on behalf of the brand.
                We brought together multiple capabilities, approaches, and
                skillsets to accomplish this:
                <ul>
                  <li>Tech Development</li>
                  <li>Behavioral UX</li>
                  <li>Visual Design</li>
                  <li>Content Strategy</li>
                  <li>Agile Development</li>
                </ul>
              </p>
              <h5>Result</h5>
              <p>
                North Highland used Agile development to produce first prototype
                within 15 weeks—with a full site launch in market soon after.
                The launch of the News Hub drove a 108% increase in site visits.
                View the site:{' '}
                <a
                  href="https://news.delta.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  news.delta.com
                </a>
                .
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle1}>
                Close
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      ))}
    </div>
  )
}

ModalGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
}

export default ModalGrid
