import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherExtreInfo = ({ humidity, wind }) => (
  // template de string ESC6 ( template literals ).
  <div className="weatherExtraInfoCont">
    <span className="extraInfoText">
      { `Humidity: ${humidity} % - ` }
    </span>
    <span className="extraInfoText">
      { `Wind: ${wind}` }
    </span>
  </div>
)

WeatherExtreInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtreInfo