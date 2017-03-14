import React, { PropTypes } from 'react'
import CountryPage from './CountryPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { weatherFormattedForOverview, forecastFormattedForDailyWeather } from '../../selectors/weatherFormatters'
import * as overviewActions from '../../actions/overviewActions.js'
import * as forecastActions from '../../actions/forecastActions.js'

const GIBRALTAR_COUNTRY_ID = "2411585"

class CountryPageManager extends React.Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      overview: Object.assign({}, props.overview),
      forecast: props.forecast.slice()
    }

    this.refresh = this.refresh.bind(this)
  }
  componentDidMount(){
    this.refresh(this.props.params.countryId || GIBRALTAR_COUNTRY_ID)
  }
  componentWillReceiveProps(newProps){
    if(newProps.params.countryId !== this.props.params.countryId){
      this.refresh(newProps.params.countryId || GIBRALTAR_COUNTRY_ID)
    }
    this.setState({overview: newProps.overview, forecast: newProps.forecast})
  }
  refresh(countryId){
    const { countryId: routeId } = this.props.routeParams
    this.props.overviewActions
    .loadOverview(countryId || routeId)
      .then((x) =>
        this.props.forecastActions
        .loadForecast(countryId || routeId))
  }

  render () {
    const { overview, forecast } = this.state
    return (
      <CountryPage overview={overview} forecast={forecast} />
    )
  }

}
CountryPageManager.propTypes = {
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
  ),
  overviewActions: PropTypes.shape({
    loadOverview: PropTypes.func.isRequired
  }),
  forecastActions: PropTypes.shape({
    loadForecast: PropTypes.func.isRequired
  }),
  routeParams: PropTypes.shape({
    countryId: PropTypes.string.isRequired
  }),
  params: PropTypes.shape({
    countryId: PropTypes.string.isRequired
  })
}

function getInitialOverview (state, countryId){
  const defaultOverview = { icon: '', description: '', temp: { current: 0, high: 0, low: 0} }

  if (!state.overview[countryId]) return defaultOverview
  return weatherFormattedForOverview(state.overview[countryId])
}

function getInitialForecast (state, countryId){
  const defaultForecast = [{date: '', icons: [{src: '', alt: '', time: ''}]}]

  if (!state.forecast[countryId]) return defaultForecast
  return forecastFormattedForDailyWeather(state.forecast[countryId])
}

function mapStateToProps(state, ownProps){
  const countryId = ownProps.routeParams.countryId || '2411585'
  return {
    overview: getInitialOverview(state, countryId),
    forecast: getInitialForecast(state, countryId)
  }
}
function mapDispatchToProps(dispatch){
  return {
    overviewActions: bindActionCreators(overviewActions, dispatch),
    forecastActions: bindActionCreators(forecastActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryPageManager);
