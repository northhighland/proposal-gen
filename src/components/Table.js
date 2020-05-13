import React from 'react'
import PropTypes from 'prop-types'

const TeamTable = ({ gridItems }) => (
  <table width="1100" border="1" className="table-responsive">
    <tbody className="text-muted">
      {gridItems.map((item) => (
        <tr key={item.role}>
          <td width="20%">{item.role}</td>
          <td>{item.roledescription}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

TeamTable.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string,
      roledescription: PropTypes.string,
    })
  ),
}

export default TeamTable
