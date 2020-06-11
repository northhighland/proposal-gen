import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import ModalThumbImg from '../components/ModalThumbImg'
import ModalFullImg from '../components/ModalFullImg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
/* eslint-disable */

function ModalGrid(props) {
  const gridItems = props.gridItems
  const [modal1, setModal1] = useState(false)
  const toggle1 = () => setModal1(!modal1)

  return (
    <div className="row">
      <Fragment>
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
                  <div className="portfolio-caption-heading">
                    {item.heading}
                  </div>
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
                {console.log(modal1)}
                <div className="container">
                  <div className="row justify-content-center modal-top">
                    <div className="col-lg-8">
                      <div className="modal-body">
                        <h2 className="text-uppercase modal-h2">
                          {item.heading}
                        </h2>
                        <p className="item-intro text-muted modal-p">
                          {item.subtitle}
                        </p>
                        <ModalFullImg imageInfo={item} />
                      </div>
                    </div>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <h5>{item.challengeheader}</h5>
                <p>{item.challengetext}</p>
                <h5>{item.approachheader}</h5>
                <p>{item.approachtext}</p>
                <h5>{item.resultheader}</h5>
                <p>{item.resulttext}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="link"
                  className="btn-link-dark"
                  onClick={toggle1}>
                  Close
                </Button>{' '}
              </ModalFooter>
            </Modal>
          </div>
        ))}
      </Fragment>
    </div>
  )
}

ModalGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      imageFull: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      subtitle: PropTypes.string,
      challengeheader: PropTypes.string,
      challengetext: PropTypes.string,
      approachheader: PropTypes.string,
      approachtext: PropTypes.string,
      resultheader: PropTypes.string,
      resulttext: PropTypes.string,
    })
  ),
}

export default ModalGrid
