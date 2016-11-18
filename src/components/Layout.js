//handles layout/template used on every page
import React, { PropTypes, Component} from 'react'
import Header from './common/Header.js'
import { connect } from 'react-redux'

class Layout extends Component {
  render() {
    let { children } = this.props
    return (
      <div className="container-fluid">
        <Header />
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
}

export default Layout
