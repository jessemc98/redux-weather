import React, { PropTypes} from 'react'
import WeatherIcon from '../icon/WeatherIcon'
import './DailyOverview.scss'

const DailyOverview = ({ icon, weather, currentTemp, high, low}) => (
  <div className="DailyOverview">
    <div className="DailyOverview_weather">
      <span className="DailyOverview_weather_current">{currentTemp}&deg;</span>
      <span className="DailyOverview_weather_highlow">{high}&deg;/{low}&deg;</span>
      <h5 className="DailyOverview_description">{weather}</h5>
    </div>
    <WeatherIcon src={icon} alt={weather}/>
  </div>
)
DailyOverview.propTypes = {
  icon: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}
export default DailyOverview
