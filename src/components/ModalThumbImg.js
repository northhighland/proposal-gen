import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ModalThumbImg = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
        className="img-fluid"
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
        className="img-fluid"
      />
    )
  }

  if (!!image && typeof image === 'string')
    return (
      <img style={imageStyle} src={image} alt={alt} className="img-fluid" />
    )

  return null
}

ModalThumbImg.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default ModalThumbImg
