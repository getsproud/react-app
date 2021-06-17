import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { Link } from 'react-router-dom'

import ActionCreators from '../../actions'

import './dashboard.scss'

export default function Dashboard() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const upcoming = useSelector(state => state.training.upcoming)
  const recommended = useSelector(state => state.training.recommendations)
  const employee = useSelector(state => state.employee)
  const budget = useSelector(state => state.budget)

  useEffect(() => {
    dispatch(ActionCreators.getEmployeeBudget(employee._id))
    dispatch(ActionCreators.getUpcomingTrainings())
  }, [employee._id, dispatch])

  return (
    <div className="columns sproud-dashboard">
      <div className="column">
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent is-vertical">
            <div className="tile is-child box">
              <div className="columns">
                <div className="column">
                  <h5 className="title is-5 has-text-grey-light">
                    <span className="icon-text">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-credit-card"></span>
                      </span>
                      <span>{ t('common:REMAINING_BUDGET') }</span>
                    </span>
                  </h5>
                </div>
              </div>
              <div className="columns is-vend">
                <div className="column">
                  <h2 className="title is-2">
                    <span className="icon-text">
                      <span className="icon has-text-primary mr-medium">
                        <i className="lni lni-bank"></i>
                      </span>
                      <span>{ new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(budget.remaining) }</span>
                    </span>
                  </h2>
                </div>
                <div className="column is-narrow">
                  <Link className="button is-primary is-light">
                    <span className="icon-text">
                      <span className="icon">
                          <i className="lni lni-ticket-alt-1"></i>
                      </span>
                      <span>
                        { t('common:BUDGET_OVERVIEW') }
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tile is-child box">
              <div className="columns is-vcentered">
                <div className="column">
                  <h5 className="title is-5 has-text-grey-light">
                    <span className="icon-text">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-crown"></span>
                      </span>
                      <span>
                        { t('common:UPCOMING_PERSONAL_GOALS') }
                      </span>
                    </span>
                  </h5>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <h5 className="title is-6 has-text-grey-light">
                    { t('common:NO_UPCOMING_PERSONAL_GOALS') }
                  </h5>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <Link className="button is-primary is-light">
                    { t('common:CREATE_PERSONAL_GOALS') }
                  </Link>
                </div>
              </div>
            </div>
            <div className="tile is-child box">
              <div className="columns is-vcentered">
                <div className="column">
                  <h5 className="title is-5 has-text-grey-light">
                    <span className="icon-text">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-graduation"></span>
                      </span>
                      <span>{ t('common:RECOMMENDED_TRAININGS') }</span>
                    </span>
                  </h5>
                </div>
              </div>
              {!recommended && (!recommended.docs || !recommended.docs.length) ? (
                <>
                  <div className="columns is-vcentered">
                    <div className="column">
                      <h5 className="title is-6 has-text-grey-light">
                        { t('common:NO_RECOMMENDED_TRAININGS') }
                      </h5>
                    </div>
                  </div>
                  <div className="columns is-vcentered">
                    <div className="column">
                      <Link className="button is-primary is-light">
                        { t('common:CREATE_TRAINING') }
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="columns is-vcentered">
                  <div className="column">
                    <ul>
                      { recommended && recommended.docs && recommended.docs.map(r => (
                        <li className="recommendation-item" key={r._id} >
                          <div className="columns is-mobile is-vcentered">
                            <div className="column">
                              <strong>{ r.title }</strong>
                            </div>
                            <div className="column has-text-grey-light">
                              { moment(r.fromDate).format('DD.MM.') } - { moment(r.fromDate).format('DD.MM.YYYY') }
                            </div>
                            <div className="column has-text-right">
                              <Link to={`/trainings/${r._id}`} className="button is-light">
                                <span className="icon-text">
                                  <span>{ t('common:TO_TRAINING') }</span>
                                  <span className="icon">
                                    <i className="lni lni-chevron-right"></i>
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      )) }
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="tile is-parent is-6 is-vertical ">
            <div className="tile is-child box">
              <div className="columns is-vcentered is-mobile">
                <div className="column">
                  <h5 className="title is-5 has-text-grey-light">
                    <span className="icon-text">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-graduation"></span>
                      </span>
                      <span>{ t('common:UPCOMING_DATES') }</span>
                    </span>
                  </h5>
                  { upcoming && upcoming.docs ? (
                    <>
                      <h2 className="title is-5 is-flex is-justify-content-space-between">
                        <span>{ upcoming.docs[0].title }</span> <small className="mgl-auto has-text-grey-light">{ moment(upcoming.docs[0].fromDate).format('MM.DD.') } - { moment(upcoming.docs[0].toDate).format('MM.DD.YYYY') }</small>
                      </h2>
                      <p className="subtitle is-6">
                        { upcoming.docs[0].description }
                      </p>
                      <Link to={`/trainings/${upcoming.docs[0]._id}`} className="button is-primary is-light">
                        <span className="icon-text">
                          <span>{ t('common:TO_TRAINING') }</span>
                          <span className="icon">
                            <i className="lni lni-chevron-right"></i>
                          </span>
                        </span>
                      </Link>
                    </>
                  ) : (
                    <h2 className="title is-5 has-text-grey-light">
                      { t('common:NO_UPCOMING_TRAINING') }
                    </h2>
                  ) }
                </div>
                { !upcoming || !upcoming.docs ? (
                  <div className="column is-narrow">
                    <Link to="/trainings" className="button is-primary is-rounded">
                      <span>
                        { t('common:FIND_TRAINING_NOW') }
                      </span>
                    </Link>
                  </div> ) : null }
              </div>
            </div>
            <div className="tile is-child box">
              <div className="columns is-vcentered">
                <div className="column">
                  <h5 className="title is-5 has-text-grey-light">
                    <span className="icon-text">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-users-2"></span>
                      </span>
                      <span>
                        { t('common:UPCOMING_BROWNBAGS') }
                      </span>
                    </span>
                  </h5>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <h5 className="title is-6 has-text-grey-light">
                    { t('common:NO_UPCOMING_BROWNBAGS') }
                  </h5>
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <Link className="button is-primary is-light">
                    { t('common:CREATE_BROWNBAGS') }
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
