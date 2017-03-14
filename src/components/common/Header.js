import React, { PropTypes } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as citySearchActions from '../../actions/citySearchActions'
import { uppercaseFirst } from '../../selectors/selectors'

import './Header.scss'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      search: ''
    }

    this.change = this.change.bind(this)
    this.redirectToCity = this.redirectToCity.bind(this)
    this.getFirstCity = this.getFirstCity.bind(this)
    this.redirectToSearchCity = this.redirectToSearchCity.bind(this)
  }
  change(event) {
    this.setState({search: event.target.value}, () => {
      this.props.citySearchActions.findCities(this.state.search)
    })
  }
  redirectToCity(city) {
    return this.props.router.push(`/${city.id}`)
  }
  getFirstCity() {
    const { cityOptions } = this.props
    if (cityOptions.length === 0) {
      return false
    }
    return cityOptions[0]
  }
  redirectToSearchCity(e) {
    e.preventDefault()

    const firstCity = this.getFirstCity()
    if (firstCity) {
      this.props.router.push(`/${firstCity.id}}`)
    }
    return //error no city matches that name
  }
  render () {
    return (
      <nav className="Header">
        <form >
          <input className="Header_search" placeholder="Enter city name" value={this.state.search} onChange={this.change} />
          <input className="Header_submit" type="submit" value="search" />
          <ul>
            {this.props.cityOptions.map(city => {
              const redirectToCity = () => {
                this.redirectToCity(city)
              }
              return (
                <li key={city.id}>
                  <button onClick={redirectToCity}>
                    {city.name},{city.sys.country}
                  </button>
                </li>
              )
            })}
          </ul>
        </form>
        <h1>{uppercaseFirst(this.props.currentCityName)}</h1>
      </nav>
    )
  }
}

Header.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  params: PropTypes.shape({
    countryId: PropTypes.string.isRequired
  }).isRequired,
  cityOptions: PropTypes.array.isRequired,
  citySearchActions: PropTypes.shape({
    findCities: PropTypes.func.isRequired
  }).isRequired,
  currentCityName: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps){
  return {
    cityOptions: state.citySearch,
    currentCityName: state.overview[ownProps.params.countryId] ?
      state.overview[ownProps.params.countryId].city :
      'gibraltar'
  }
}
function mapDispatchToProps(dispatch){
  return {
    citySearchActions: bindActionCreators(citySearchActions, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
