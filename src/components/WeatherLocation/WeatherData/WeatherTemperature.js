import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG,
} from './../../../constants/weathers'
import './styles.css'

const icons = {
  [SUN]: 'day-sunny',
  [FOG]: 'day-fog',
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [SNOW]: 'snow',
  [WINDY]: 'windy',
  [RAIN]: 'rain'
}

const getWatherIcon = weatherState => {
  let icon = icons[weatherState]
  icon = icon === undefined ? 'day-sunny' : icon
  const sizeIcon = '2x'

  return <WeatherIcons
      className="wicon"
      name={ icon }
      size={ sizeIcon }
    />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {
      getWatherIcon(weatherState)
    }
    <span className="temperature">{ temperature }</span>
    <span className="temperatureType"> Cº</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature