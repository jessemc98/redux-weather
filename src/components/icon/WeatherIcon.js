import React, {PropTypes} from 'react'

const WeatherIcon = (props) => (
  <img
    className="WeatherIcon"
    src={props.src}
    alt={'clear skies icon'}/>
)
WeatherIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default WeatherIcon
