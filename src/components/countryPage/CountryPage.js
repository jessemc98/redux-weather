import React, { PropTypes } from 'react'
import DailyWeather from '../dailyWeather/DailyWeather'
import DailyOverview from '../dailyOverview/DailyOverview'

import './CountryPage.scss'

const CountryPage = ({ overview, forecast}) => (
  <main className="CountryPage">
    <DailyOverview
      icon={overview.icon}
      weather={overview.description}
      currentTemp={overview.temp.current}
      high={overview.temp.high}
      low={overview.temp.low} />

    {forecast.map((day, i) => {
      return (<DailyWeather {...day} key={i}/>)
    })}
  </main>
)
CountryPage.propTypes = {
  overview: PropTypes.shape({
    icon: PropTypes.string.isRequired, //icon src url
    description: PropTypes.string.isRequired,
    temp: PropTypes.shape({
      current: PropTypes.number.isRequired,
      high: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  )
}

export default CountryPage;
