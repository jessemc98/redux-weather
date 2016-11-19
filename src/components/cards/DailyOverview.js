import React, { PropTypes} from 'react'

const DailyOverview = ({ icon, weather, currentTemp, high, low}) => (
  <div className="DailyOverview">
    <div className="DailyOverview_weather">
      <span className="DailyOverview_weather_current">{currentTemp}</span>
      <span className="DailyOverview_weather_highlow">{high}/{low}</span>
    </div>
    <h5 className="DailyOverview_description">{weather}</h5>
    <img className="DailyOverview_icon" src={icon} alt={weather + ' icon'}/>
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
