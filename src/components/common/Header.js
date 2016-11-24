import React, { PropTypes } from 'react'
import { withRouter } from 'react-router'
import { uppercaseFirst } from '../../selectors/selectors'
import './Header.scss'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      search: ''
    }

    this.change = this.change.bind(this)
    this.redirect = this.redirect.bind(this)
  }
  change(event) {
    this.setState({search: event.target.value})
  }
  redirect (event) {
    event.preventDefault()
    this.props.router.push(`/${this.state.search.toLowerCase()}`)
  }
  render () {
    return (
      <nav className="Header">
        <form onSubmit={this.redirect}>
          <input className="Header_search" placeholder="Enter city name" value={this.state.search} onChange={this.change} />
          <input className="Header_submit" type="submit" value="search" />
        </form>
        <h1>{uppercaseFirst(this.props.params.country || 'Gibraltar')}</h1>
      </nav>
    )
  }
}

Header.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  params: PropTypes.shape({
    country: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(Header)
