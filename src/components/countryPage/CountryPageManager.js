import React, { PropTypes } from 'react'
import CountryPage from './CountryPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { weatherFormattedForOverview, forecastFormattedForDailyWeather } from '../../selectors/weatherFormatters'
import * as overviewActions from '../../actions/overviewActions.js'
import * as forecastActions from '../../actions/forecastActions.js'


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
    this.refresh(this.props.params.country || "gibraltar")
  }
  componentWillReceiveProps(newProps){
    if(newProps.params.country !== this.props.params.country){
      this.refresh(newProps.params.country || "gibraltar")
    }
    this.setState({overview: newProps.overview, forecast: newProps.forecast})
  }
  refresh(country){
    this.props.overviewActions.loadOverview(country || this.props.routeParams.country).then((x) => {
        this.props.forecastActions.loadForecast(country || this.props.routeParams.country)
      })
  }

  render () {
    const { overview, forecast } = this.state
    return (
      <div>
        <button onClick={this.refresh}>refresh</button>
        <CountryPage overview={overview} forecast={forecast} />
      </div>
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
    country: PropTypes.string.isRequired
  }),
  params: PropTypes.shape({
    country: PropTypes.string.isRequired
  })
}

function getInitialOverview (state, country){
  const defaultOverview = { icon: '', description: '', temp: { current: 0, high: 0, low: 0} }

  if (!state.overview[country]) return defaultOverview
  return weatherFormattedForOverview(state.overview[country])
}

function getInitialForecast (state, country){
  const defaultForecast = [{date: '', icons: [{src: '', alt: '', time: ''}]}]

  if (!state.forecast[country]) return defaultForecast
  return forecastFormattedForDailyWeather(state.forecast[country])
}

function mapStateToProps(state, ownProps){
  const country = ownProps.routeParams.country
  return {
    overview: getInitialOverview(state, country),
    forecast: getInitialForecast(state, country)
  }
}
function mapDispatchToProps(dispatch){
  return {
    overviewActions: bindActionCreators(overviewActions, dispatch),
    forecastActions: bindActionCreators(forecastActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryPageManager);
