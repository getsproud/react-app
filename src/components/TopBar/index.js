import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ActionCreators from '../../actions'

import logo from '../../assets/logo.svg'

import './topbar.scss'

function TopBar({ employee, loadLong }) {
  const { t } = useTranslation()

  const [dropDown, setDropDown] = useState(false)

  const notification = null
  const displayName = employee && employee.firstname ? `${employee.firstname} ${employee.lastname}` : employee.identifier

  useEffect(() => {
    const detectOutsideClick = e => {
      if (!e.target.closest('.has-dropdown') && !(e.target.classList.contains('has-dropdown') && e.target.className.contains('navbar-item')) && dropDown) {
        setDropDown(false)
        document.removeEventListener('click', detectOutsideClick)
      }
    }
    document.addEventListener('click', detectOutsideClick)
  }, [dropDown])

  return (
    <nav className="navbar is-transparent">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo} alt="sproud."/>
          </div>
          <div className="navbar-burger" data-target="sproud-burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="sproud-burger-menu" className="navbar-menu">

          <div className="ml-medium navbar-start">
            <div className="navbar-item navbar-search">
              <span className="icon-text">
                <span className="icon">
                  <span className="lni lni-lg lni-search-alt"></span>
                </span>
                <span className="search-input">
                  { t('common:SEARCH_PLACEHOLDER') }
                </span>
              </span>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <span className="notification-icon">
                { notification ? (<span className="has-notification"></span>) : null }
                <span className="icon">
                  <span className="lni lni-lg lni-alarm-2"></span>
                </span>
              </span>
            </div>
            <span className="seperator"></span>
            <div className={`navbar-item has-dropdown ${dropDown ? 'is-active' : ''}`}>
              <div className="navbar-link employee-profile" onClick={() => setDropDown(!dropDown)}>
                <figure className="image is-32x32">
                  <img src={`https://i.pravatar.cc/64?img=66`} alt={ displayName } className="is-rounded"/>
                </figure>
                { displayName }
              </div>
              <div className={`navbar-dropdown is-right`}>
                <span className="navbar-item">
                  <span className="icon-text">
                    <span className="icon">
                      <span className="lni lni-cog"></span>
                    </span>
                    <span>{t('common:SETTINGS')}</span>
                  </span>
                </span>
                <hr className="navbar-divider" />
                <span className="navbar-item">
                <span className="icon-text">
                  <span className="icon">
                    <span className="lni lni-power-switch"></span>
                  </span>
                  <span>{t('common:LOGOUT')}</span>
                </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch)

const mapStateToProps = state => ({
  employee: state.employee,
  company: state.company
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
