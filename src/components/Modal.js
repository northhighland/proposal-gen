import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import deltaFull from '../assets/img/portfolio/deltaFull.jpg'
import deltaThumb from '../assets/img/portfolio/deltaThumb.jpg'
import globalFull from '../assets/img/portfolio/globalFull.jpg'
import globalThumb from '../assets/img/portfolio/globalThumb.jpg'
import aramarkFull from '../assets/img/portfolio/aramarkFull.jpg'
import aramarkThumb from '../assets/img/portfolio/aramarkThumb.jpg'
import boaFull from '../assets/img/portfolio/boaFull.jpg'
import boaThumb from '../assets/img/portfolio/boaThumb.jpg'
import globalcpgFull from '../assets/img/portfolio/globalcpgFull.jpg'
import globalcpgThumb from '../assets/img/portfolio/globalcpgThumb.jpg'
import stratasysFull from '../assets/img/portfolio/stratasysFull.jpg'
import stratasysThumb from '../assets/img/portfolio/stratasysThumb.jpg'
/* eslint-disable */

const LivePreviewExample = () => {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)

  const toggle1 = () => setModal1(!modal1)
  const toggle2 = () => setModal2(!modal2)
  const toggle3 = () => setModal3(!modal3)
  const toggle4 = () => setModal4(!modal4)
  const toggle5 = () => setModal5(!modal5)
  const toggle6 = () => setModal6(!modal6)

  return (
    <Fragment>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle1}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={deltaThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Delta Airlines</div>
            <div className="portfolio-caption-subheading text-muted">
              Design + Build
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal1} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">Delta News Hub</h2>
                  <p className="item-intro text-muted">
                    Delta Airlines Design + Build
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={deltaFull}
                    alt="deltaFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            Delta wanted to develop a web experience that showcased its fresh
            approach to storytelling, enabling key audiences to a quicker, more
            intuitive way to find, publish, and share news about Delta and the
            airline industry.
          </p>
          <h5>Approach</h5>
          <p>
            In collaboration with the Delta team, North Highland created the
            vision for the “News Hub,” a digital news site with multi-platform
            and social capabilities that uses videos, images, and graphics to
            tell compelling stories on behalf of the brand. We brought together
            multiple capabilities, approaches, and skillsets to accomplish this:
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
            within 15 weeks—with a full site launch in market soon after. The
            launch of the News Hub drove a 108% increase in site visits. View
            the site:{' '}
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

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle2}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={globalThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Global Oil and Gas</div>
            <div className="portfolio-caption-subheading text-muted">
              Design + Build
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">B2B e-Commerce Platform</h2>
                  <p className="item-intro text-muted">Design + Build</p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={globalFull}
                    alt="globalFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            A global oilfield equipment provider needed a faster, automated
            process for inside salespeople to submit quotes and wanted to
            introduce a customer facing, self-service portal as well. The client
            needed to collect all their product related data in one place to
            ensure consistent quoting.
          </p>
          <h5>Approach</h5>
          <p>
            North Highland started the engagement with a series of Futures
            workshops to establish a digital vision. The immediate need
            identified was an e-Commerce platform to speed up the sales cycle
            and enable self-service for their customers.
          </p>
          <p>
            It was clear that this would have monumental impact on the business:
            this was not just about establishing a digital sales channel, this
            was about transforming an entire organization to become digitally
            enabled.
          </p>
          <p>
            Leveraging our service design framework, we developed a current and
            future state service architecture in co-creation with stakeholders
            to visualize the changes needed. It helped all stakeholders to
            connect the dots and highlight high-value areas of focus.
          </p>
          <p>
            To get buy-in from across the organization, we ran a parallel track
            addressing the service architecture (logistics, fullfillment,
            Salesforce integration) needed and creating a proof of concept for
            the customer-facing e-Commerce platform in form of a prototype. The
            prototype made the vision come to life and gave stakeholders the
            opportunity to react and provide feedback. It shifted the client's
            mindset from the anxiety of not knowing to anticipating the changes
            with excitement. As the service architecture matured the prototype
            evolved.
          </p>
          <h5>Result</h5>
          <p>
            North Highland used its software development lifecycle to deliver a
            self-service portal, providing a unique experience for both
            employees and customer to submit quotes to Salesforce. Portal users
            can now create over 5,000 different product configurations,
            visualize final product assembly, and customize shipments.
            Salespeople can also apply discounts and view commissions per quote.
            A CMS populated with product data for over 3,000 unique products
            serves as single source of truth for all product related activities.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle2}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle3}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={aramarkThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Aramark</div>
            <div className="portfolio-caption-subheading text-muted">
              Architecture + Implementation
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">
                    "Future-ready" System Integrations
                  </h2>
                  <p className="item-intro text-muted">
                    Architecture + Implementation
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={aramarkFull}
                    alt="aramarkFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            Aramark Refreshments Services had a need to integrate their new
            route management system with their backend services all while
            maintaining business continuity. Further, Aramark wanted to ensure
            the systems put in the place where ready for future enhancements and
            optimizations.
          </p>
          <h5>Approach</h5>
          <p>
            North Highland used its software development lifecycle to plan out
            the integration in 5 simple phases – Discover, Define, Design,
            Develop, and Deploy – and iterated over these phases to continuously
            deliver business value by integrating pieces of the business until
            the entire line was fully instrumented.
          </p>
          <h5>Result</h5>
          <p>
            North Highland developed a fully integrated system where
            applications can pass information from one to the other through
            interfaces that can be easily modified or replaced without having
            the need of a full system replacement
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle3}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle4}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={boaThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Bank of America</div>
            <div className="portfolio-caption-subheading text-muted">
              Transactional Service Model
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal4} toggle={toggle4}>
        <ModalHeader toggle={toggle4}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">Marketing Operations</h2>
                  <p className="item-intro text-muted">
                    Transactional Service Model
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={boaFull}
                    alt="boaFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            Bank of America needed to upscale its internal capacity creating
            enhanced web sites and custom print materials, while maximizing cost
            efficiencies.
          </p>
          <h5>Approach</h5>
          <p>
            North Highland assembled a multi-disciplinary Pod of UI and UX
            designers, full-stack developers as well as a scrum master to manage
            various digital and print initiatives in support of Bank of
            America's team. The North Highland team integrated seamlessly with
            the client's Marketing function, quickly getting up to speed and
            delivering high-quality output. The team also proactively seeked
            opportunities to improve current workflows and share best practices
            with the client to improve overall delivery performance.
          </p>
          <h5>Result</h5>
          <p>
            North Highland established an order intake process to provide
            accountability of the end product, while aligning skillsets to
            efficiently serve the Financial Advisors. We implemented governance
            and controls to manage scope of work and provide consistent value
            and the new KPIs provided visibility into creative development. The
            new service model enhanced the structure of the field marketing
            department and eliminated onboarding and discovery efforts,
            resulting in over $100k in savings.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle4}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle5}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={globalcpgThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Global CPG</div>
            <div className="portfolio-caption-subheading text-muted">
              e-Commerce Strategy + Design
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal5} toggle={toggle5}>
        <ModalHeader toggle={toggle5}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">Marketing Operations</h2>
                  <p className="item-intro text-muted">
                    Transactional Service Model
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={globalcpgFull}
                    alt="globalcpgFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            Our client was seeking to reimagine its B2B Digital Product Catalog
            that allows franchises to order products and equipment. The current
            experience was outdated and cumbersome, causing customers to
            circumvent the system and place orders manually.
          </p>
          <h5>Approach</h5>
          <p>
            North Highland conducted a survey which garnered more than 800
            responses. Based on these insights we re-imagined the actual
            architecture and user flows. After testing these initial concepts,
            we brought the new concepts to life through fresh clean designs.
          </p>
          <h5>Result</h5>
          <p>
            North Highland was able to eliminate an average of 5 clicks per
            order, streamlining how customers browse and shop for items, as well
            as simplifying the checkout process.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle5}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <div className="portfolio-link" data-toggle="modal" onClick={toggle6}>
            <div className="portfolio-hover"></div>
            <img className="img-fluid" src={stratasysThumb} alt="" />
          </div>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Stratasys</div>
            <div className="portfolio-caption-subheading text-muted">
              Digital Strategy + Design
            </div>
          </div>
        </div>
      </div>

      <Modal zIndex={2000} centered size="lg" isOpen={modal6} toggle={toggle6}>
        <ModalHeader toggle={toggle6}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">Digital Product Catalog</h2>
                  <p className="item-intro text-muted">
                    Digital Strategy + Design
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={stratasysFull}
                    alt="stratasysFull"
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>Challenge</h5>
          <p>
            The client is a global leader in 3D printing technology that is
            radically changing the future of manufacturing, medicine, design and
            education. Yet their website was that of an industrial printer maker
            from ten years ago. They wanted to take a great leap, transforming
            their digital experience to that of a brand leader, while creating a
            significantly better tool for selling what their customers want – 3D
            solutions, not a lineup of printers.
          </p>
          <h5>Approach</h5>
          <p>
            North Highland partnered with the client’s Digital team to
            re-platform, reinvent, redesign and relaunch their website in only
            three months. Our multidisciplinary team conducted a competitive
            analysis, customer interviews, content audits, and SEO analysis to
            inform user experience, design and content recommendations. Agile
            processes and principles were used throughout. The new site
            reinforces the client’s market authority, differentiates them from
            existing and emerging competitors, and enhances the platform as a
            lead generation tool.
          </p>
          <h5>Result</h5>
          <p>
            Through the streamlined user flows and up- and cross-sell
            opportunities along the sales funnel, Stratasys was able to increase
            lead generation by 24%.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" className="btn-link-dark" onClick={toggle6}>
            Close
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default LivePreviewExample
