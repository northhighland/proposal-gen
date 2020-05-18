import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Table from '../components/Table'
import scrum from '../img/scrum.png'
import img1 from '../img/about/img1.jpg'
import img2 from '../img/about/img2.jpg'
import img3 from '../img/about/img3.jpg'
import how1 from '../img/how/how1.jpg'
import how2 from '../img/how/how2.jpg'
import how3 from '../img/how/how3.jpg'
import Modal from '../components/Modal'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  solutions,
  intro,
  how,
  teamcost,
  teamtable,
  about,
  contact,
}) => (
  <div>
    <header
      className="masthead"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className="container">
        <div className="masthead-subheading">{title}</div>
        <div className="masthead-heading text-uppercase">{subheading}</div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#MVP"
        >
          find out more&nbsp;
        </a>
      </div>
    </header>
    <section className="page-section" id="MVP">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{mainpitch.title}</h2>
          <h3 className="section-subheading text-muted">
            {mainpitch.description}
          </h3>
          <b>{mainpitch.mvptext}</b>
        </div>
        <Features gridItems={intro.pods} />
      </div>
    </section>
    <section className="page-section bg-light" id="how">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{how.heading}</h2>
          <h3 className="section-subheading text-muted">{how.description}</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img src={how1} alt="how1" className="mx-auto rounded-circle" />
              <h4>{how.teamMemberHeading1}</h4>
              <p className="text-muted">{how.teamMemberText1}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img src={how2} alt="how2" className="mx-auto rounded-circle" />
              <h4>{how.teamMemberHeading2}</h4>
              <p className="text-muted">{how.teamMemberText2}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img src={how3} alt="how3" className="mx-auto rounded-circle" />
              <h4>{how.teamMemberHeading3}</h4>
              <p className="text-muted">{how.teamMemberText3}</p>
            </div>
          </div>
        </div>
        <div className="row" align="center">
          <img
            src={scrum}
            alt="scrum"
            width="1100"
            height="412"
            className="img-fluid scrum-img"
          />
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Scalable Scrum Framework</p>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section" id="Solutions">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {solutions.heading}
          </h2>
          <h3 className="section-subheading text-muted">
            {solutions.description}
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className="my-3" align="left">
              {solutions.text1}
            </h4>
          </div>
          <div className="col-md-4">
            <h4 className="my-3" align="left">
              {solutions.text2}
            </h4>
          </div>
          <div className="col-md-4">
            <h4 className="my-3" align="left">
              {solutions.text3}
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Where we've done it before
          </h3>
        </div>
        <div className="row">
          <Modal />
        </div>
      </div>
    </section>
    <section className="page-section" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{teamcost.heading}</h2>
          <h3 className="section-subheading text-muted">
            {teamcost.description}
          </h3>
        </div>
        <div align="center">
          <h4>{teamcost.tableName}</h4>
          <Table gridItems={teamtable.tablerows} />
        </div>
        <div className="text-center">
          <p className="text-muted">{teamcost.details}</p>
        </div>
      </div>
    </section>
    <section className="page-section bg-light" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{about.heading}</h2>
          <h3 className="section-subheading text-muted">{about.description}</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img src={img1} alt="img1" className="rounded-circle img-fluid" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{about.timelinehead1}</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about.timelinebody1}</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img src={img2} alt="img2" className="rounded-circle img-fluid" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{about.timelinehead2}</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about.timelinebody2}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img src={img3} alt="img3" className="rounded-circle img-fluid" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>{about.timelinehead3}</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{about.timelinebody3}</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>{about.start}</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{contact.heading}</h2>
            <h3 className="section-subheading text-muted">For questions please contact <a href="mailto:james.prolizo@northhighland.com?subject=PODs: Engineering at North Highland">James Prolizo</a></h3>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  how: PropTypes.object,
  solutions: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    pods: PropTypes.array,
  }),
  teamcost: PropTypes.object,
  teamtable: PropTypes.shape({
    tablerows: PropTypes.array,
  }),
  about: PropTypes.object,
  contact: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        how={frontmatter.how}
        solutions={frontmatter.solutions}
        teamcost={frontmatter.teamcost}
        teamtable={frontmatter.teamtable}
        about={frontmatter.about}
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
          mvptext
        }
        intro {
          pods {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
        how {
          heading
          description
          teamMemberHeading1
          teamMemberText1
          teamMemberHeading2
          teamMemberText2
          teamMemberHeading3
          teamMemberText3
        }
        teamcost {
          heading
          description
          tableName
          details
        }
        teamtable {
          tablerows {
            role
            roledescription
          }
        }
        solutions {
          heading
          description
          text1
          text2
          text3
        }
        about {
          heading
          description
          timelinehead1
          timelinebody1
          timelinehead2
          timelinebody2
          timelinehead3
          timelinebody3
          start
        }
        contact {
          heading
          body
        }
      }
    }
  }
`
