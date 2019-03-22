import React from 'react'
import PropTypes from 'prop-types'

const Location = ({city}) => {
  // Destructuring. al igual que con la el parametro de arriba
  //const { city } = props
  // operador rest ... 
  return (
    <div>
      <h1>{ city }</h1>
    </div>
  )
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location