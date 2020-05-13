import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="row text-center">
    {gridItems.map((item) => (
      <div key={item.text} className="col-md-4">
        <div
          style={{
            width: '240px',
            display: 'inline-block',
          }}
        >
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <h4 className="my-3">{item.title}</h4>
        <p className="text-muted">{item.text}</p>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
