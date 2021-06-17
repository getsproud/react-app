import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ActionCreators from '../../actions'

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch)

const mapStateToProps = state => ({
  employee: state.employee,
  company: state.company
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ ...args }) => {
  const { authenticated, activated } = args.employee

  if (args.type === 'public' && authenticated === true && activated === true) return <Redirect to='/dashboard' />
  else if (args.type !== 'public' && (authenticated !== true || activated !== true)) return <Redirect to='/' />
  return <Route {...args} />
})
