import React, { PropTypes } from 'react'
import WeatherIcon from './WeatherIcon'

const WeatherDateIcon = ({alt, src, time}) => (
  <div className="WeatherIcon-dated">
    <WeatherIcon alt={alt} src={src}/>
    <h4>{time}</h4>
  </div>
)
WeatherDateIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default WeatherDateIcon
