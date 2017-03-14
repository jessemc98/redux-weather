import React, { PropTypes } from 'react'
import WeatherIcon from '../icon/WeatherIcon'
import './miniOverviewCard.scss'

const MiniOverViewCard = ({ name, sys, weather, id, onClick}) => {
  return (
    <li className="MiniOverViewCard" key={id}>
      <button
        className="MiniOverViewCard_button"
        onClick={onClick}>
        <WeatherIcon
          className="MiniOverViewCard_icon"
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description} />
        {name},{sys.country}
      </button>
    </li>
  )
}

MiniOverViewCard.propTypes = {
  name: PropTypes.string.isRequired,
  sys: PropTypes.shape({
    country: PropTypes.string.isRequired
  }).isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MiniOverViewCard
