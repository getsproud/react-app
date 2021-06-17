import React from 'react'
import { useTranslation } from 'react-i18next'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import ActionCreators from '../../actions'

import './navigation.scss'

const navigation = [
  [{
    label: 'common:DASHBOARD',
    icon: 'dashboard',
    link: 'dashboard'
  },
  {
    label: 'common:PERSONAL_GOALS',
    icon: 'crown',
    link: 'personal-goals'
  },
  {
    label: 'common:BUDGET',
    icon: 'credit-card',
    link: 'budget'
  }],
  {
    seperator: true,
    label: 'common:DEVELOPMENT'
  },
  [{
    label: 'common:DEVELOPMENT',
    icon: 'graduation',
    link: 'trainings'
  },
  {
    label: 'common:BROWNBAG_SESSIONS',
    icon: 'users-2',
    link: 'brownbag-sessions'
  },
  {
    label: 'common:CALENDAR',
    icon: 'calender-alt',
    link: 'calendar'
  }],
  {
    roles: ['admin', 'owner', 'superadmin', 'finance'],
    seperator: true,
    label: 'common:FINANCE'
  },
  [{
    roles: ['admin', 'owner', 'superadmin', 'finance'],
    label: 'common:SPENDINGS',
    icon: 'bank',
    link: 'finance'
  }],
  {
    roles: ['admin', 'owner', 'superadmin', 'hr'],
    seperator: true,
    label: 'common:HR'
  },
  [{
    roles: ['admin', 'owner', 'superadmin', 'hr'],
    label: 'common:USERS',
    icon: 'users',
    link: 'admin/users'
  }],
  {
    roles: ['admin', 'owner', 'superadmin'],
    seperator: true,
    label: 'common:ADMIN'
  },
  [{
    roles: ['admin', 'owner', 'superadmin'],
    label: 'common:SETTINGS',
    icon: 'cog',
    link: 'admin/settings'
  },
  {
    roles: ['admin', 'owner', 'superadmin'],
    label: 'common:COMPANY',
    icon: 'apartment',
    link: 'admin/company'
  }]
]

const checkRoles = (roles, userRoles) => roles.some(role => userRoles.includes(role))

function Navigation({ employee, loadLong }) {
  const { t } = useTranslation()

  return (
    <aside className="menu is-hidden-mobile">
      { navigation.map((entry, idx) => {
        if (!entry.roles || checkRoles(entry.roles, employee.roles)) {
          if (entry.seperator) return (
            <p className="menu-label" key={`seperator-${entry.label}`}>
               {t(entry.label)}
             </p>
          )
          if (entry instanceof Array) {
            return (<ul className="menu-list" key={`menu-${navigation[idx-1] ? navigation[idx-1].label : 'start'}`}>
              { entry.map(e => {
                if (!e.roles || checkRoles(e.roles, employee.roles)) {
                  return (<li key={`entry-${e.label}`}>
                    <NavLink to={`/${e.link}`} activeClassName="is-active">
                      <span className="icon-text">
                        <span className="icon">
                          <i className={`lni lni-${e.icon}`}></i>
                        </span>
                        <span>{t(e.label)}</span>
                      </span>
                    </NavLink>
                  </li>)
                }
                return null
              }) }
            </ul>)
          }
        }

        return null
      }) }
    </aside>)
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
)(Navigation)
