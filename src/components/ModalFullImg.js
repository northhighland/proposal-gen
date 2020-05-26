import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ModalFullImg = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, imageFull } = imageInfo

  if (!!imageFull && !!imageFull.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={imageFull.childImageSharp.fluid}
        alt={alt}
        className="img-fluid d-block mx-auto"
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
        className="img-fluid d-block mx-auto"
      />
    )
  }

  if (!!imageFull && typeof imageFull === 'string')
    return (
      <img
        style={imageStyle}
        src={imageFull}
        alt={alt}
        className="img-fluid d-block mx-auto"
      />
    )

  return null
}

ModalFullImg.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    imageFull: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      .isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default ModalFullImg
