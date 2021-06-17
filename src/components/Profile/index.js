import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ActionCreators from '../../actions'

import Bell from '../LineIcons/Regular/alarm-2'

import './profile.scss'

const ActivityFeed = React.lazy(() => import('./ActivityFeed'))

function Profile({ employee, getEmployeeBudget, budget, goals, loadLong }) {
  const { t } = useTranslation()

  useEffect(() => {
    getEmployeeBudget(employee._id)
  }, [])

  const displayName = employee && employee.firstname ? `${employee.firstname} ${employee.lastname}` : employee.identifier

  return (
    <>
      <div className="columns mb-3">
        <div className="column">
          <h2 className="title is-6">{ t('common:PROFILE') }</h2>
        </div>
        <div className="column has-text-right">
          <span className="notification-icon"><Bell /></span>
        </div>
      </div>

      <div className="columns mt-2">
        <div className="column">
          <div className="columns is-marginless">
            <div className="column has-text-centered">
              <figure className="image is-128x128 is-inline-block">
                <img src={`https://i.pravatar.cc/150?img=66`} alt={ displayName } className="is-rounded"/>
              </figure>
            </div>
          </div>

          <div className="columns mb-2">
            <div className="column has-text-centered">
              <h2 className="title is-3">{ displayName }</h2>
              <p className="subtitle is-6 has-text-grey-light">{ employee.department ? employee.department.name : null }</p>
            </div>
          </div>
        </div>
      </div>

      { budget ? (
        <div className="columns mt-3">
          <div className="column">
            <div className="columns is-gapless mb-1 is-size-7">
              <div className="column has-text-grey-light">0</div>
              <div className="column has-text-centered has-text-grey-light">{ t('common:BUDGET')} </div>
              <div className="column has-text-right has-text-grey-light">{ budget.budget }</div>
            </div>
            <div className="columns is-gapless mb-1">
              <div className="column">
                <progress className="progress is-success" value={budget.remaining } max={ budget.budget }>{(budget.remaining/budget.budget)*100}%</progress>
              </div>
            </div>
            <div className="columns is-gapless is-size-7">
              <div className="column has-text-centered has-text-grey-light">{t('common:REMAINING_BUDGET')} {budget.remaining}</div>
            </div>
          </div>
        </div>
      ) : null }

      { goals ? (
        <div className="columns mb-3">
          <div className="column">
            <div className="columns is-gapless mb-1 is-size-7">
              <div className="column has-text-grey-light">0%</div>
              <div className="column has-text-centered has-text-grey-light">{ t('common:PERSONAL_GOALS')} </div>
              <div className="column has-text-right has-text-grey-light">100%</div>
            </div>
            <div className="columns is-gapless">
              <div className="column">
                <progress className="progress is-primary" value={34} max={100}>{34}%</progress>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="columns mt-6">
        <div className="column">
          <h2 className="title is-6">{ t('common:ACTIVITY_FEED') }</h2>
          <React.Suspense fallback={(<div>...loading</div>)}>
            <ActivityFeed loadLong={loadLong} />
          </React.Suspense>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch)

const mapStateToProps = state => ({
  employee: state.employee,
  company: state.company,
  budget: state.budget
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
