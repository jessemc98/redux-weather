import React, { PropTypes } from 'react'
import WeatherDateIcon from '../icon/WeatherDateIcon'

const DailyWeather = ({date, icons=[]}) => (
  <div className="DailyWeather">
    <h2>{date}</h2>
    {icons.map((icon) => (<WeatherDateIcon {...icon} />))}
  </div>
)
DailyWeather.propTypes = {
  date: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default DailyWeather
