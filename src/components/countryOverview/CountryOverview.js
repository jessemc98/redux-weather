import React, { PropTypes } from 'react'
import WeatherIcon from '../icon/WeatherIcon'

const CountryOverview = ({editable, temp, onRemove, country, description, iconSrc}) => (
  <div className="CountryOverview">
    <div className="CountryOverview_info">
      <h2 className="CountryOverview_title">{country}</h2>
      <h3 className="CountryOverview_description">{description}</h3>
      <WeatherIcon src={iconSrc} alt={description} />
    </div>
    {!editable && <div className="CountryOverview_temp">
      <span className="CountryOverview_temp_current">{temp.current}</span>
      <span className="CountryOverview_temp_high">{temp.high}</span>
      <span className="CountryOverview_temp_low">{temp.low}</span>
    </div>}
    {editable && <button className="CountryOverview_remove" onClick={onRemove}></button>}
  </div>
)
CountryOverview.propTypes = {
  editable: PropTypes.bool,
  temp: PropTypes.shape({
    current: PropTypes.number.isRequired,
    high: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired
  }).isRequired,
  currTemp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  country: PropTypes.string,
  description: PropTypes.string,
  iconSrc: PropTypes.string
}
export default CountryOverview
