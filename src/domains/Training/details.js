import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useParams, Route, useRouteMatch, useHistory, Link } from 'react-router-dom'
import moment from 'moment'
import Avatar from 'react-avatar'

import ActionCreators from '../../actions'

import Modal from '../../components/Modal'
import Loader from '../../components/Loader'
import IconRating from '../../components/IconRating'
import Pagination from '../../components/Pagination'

import './training.scss'

export default function TrainingDetails({ getTrainingById }) {
  const { t } = useTranslation()
  const { path, url } = useRouteMatch()
  const history = useHistory()
  const dispatch = useDispatch()
  const { trainingId } = useParams()

  const [training, setTraining] = useState()
  const [feedbacks, setFeedbacks] = useState()
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState()
  const [feedbackCreate, setFeedbackCreate] = useState({learnings: [{description: ''}]})
  const [budget, setBudget] = useState()

  const employee = useSelector(state => state.employee)

  const handleFeedbackCreate = (val, key, i) => {
    if (key === 'learnings') {
      const f = {
        ...feedbackCreate,
        author: employee._id,
        training: trainingId,
        learnings: feedbackCreate.learnings ? feedbackCreate.learnings : [{description: ''}]
      }

      f.learnings[i].description = val

      setFeedbackCreate(f)
    } else {
      setFeedbackCreate({
        ...feedbackCreate,
        author: employee._id,
        training: trainingId,
        [key]: val
      })
    }
  }

  const removeLearning = idx => {
    setFeedbackCreate({
      ...feedbackCreate,
      learnings: feedbackCreate.learnings.filter((s, sidx) => idx !== sidx)
    })
  }

  const saveFeedback = useCallback(
    feedback => dispatch(ActionCreators.setFeedbackForTraining(feedback)),
    [dispatch]
  )

  useEffect(() => {
    async function getFeedbacks () {
      const f = await dispatch(ActionCreators.getFeebacksForTraining(trainingId, page))
      setFeedbacks(f)
    }

    getFeedbacks(page)
  }, [page, dispatch, trainingId])

  useEffect(() => {
    async function getTraining () {
      const t = await dispatch(ActionCreators.getTrainingById(trainingId))
      setTraining(t)
    }

    async function getBudget () {
      const b = await dispatch(ActionCreators.getEmployeeBudget())
      setBudget(b)
    }

    getTraining()
    getBudget()
  }, [trainingId, dispatch])

  return (training ? (
    <>
      <div className="columns">
        <div className="column is-8">

          <div className="box">
            <div className="columns">
              <div className="column">
                <h2 className="title is-3">{ training.title }</h2>
              </div>
            </div>
            <div className="columns is-vcentered">
              <div className="column">
                <h3 className="title is-5 title-with-icon">
                  <span className="icon-next">
                    <span className="icon has-text-grey-light mr-small">
                      <i className="lni lni-calender-alt lni-1"></i>
                    </span>
                    { moment(training.fromDate).format('DD.MM.') } - { moment(training.toDate).format('DD.MM.YYYY') }
                  </span>
                </h3>
              </div>
              <div className="column has-text-right">
                <h3 className="title is-5 title-with-icon">
                  <span className="icon-next">
                    <span className="icon has-text-grey-light mr-small">
                      <i className="lni lni-link lni-1"></i>
                    </span>
                    <a href={ training.website } rel="noreferrer" target="_blank">{ t('common:MORE_INFO_ON_WEBSITE') }</a>
                  </span>
                </h3>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="tags are-medium">
                  { training.categories.map(c => (
                    <span key={`cat-${c._id}`} className="tag is-info is-light">{ c.label }</span>
                  )) }
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <h4 className="subtitle is-5">{ training.description }</h4>
              </div>
            </div>
          </div>

          <div className="box">
            { !training.participants || !training.participants.length ? (
              <div className="columns">
                <div className="column has-text-centered">
                  <h2 className="title is-2 has-text-grey-light">
                    { t('common:NO_ONE_IS_GOING') }
                  </h2>
                  <h3 className="subtitle is-4 has-text-grey-light">
                    { t('common:BE_THE_FIRST') }
                  </h3>
                  <span className="icon is-large has-text-grey-light">
                    <i className="lni lni-sad-1 lni-6"></i>
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="columns">
                  <div className="column">
                    <h3 className="title is-4 has-text-grey-light">
                      { t('common:TRAINING_PARTICIPANTS') }
                    </h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <ul>
                      { training.participants.map(p =>
                        <li key={`participant-${p._id}`}>
                          <div className="columns is-vcentered">
                            <div className="column is-3">
                              <span className="mr-small"><Avatar name={p.identifier} textSizeRatio={2} round size="24" /></span> { employee && p._id === employee._id ? t('common:YOU') : `${p.firstname} ${p.lastname}`}
                            </div>
                            <div className="column is-2">
                              <span className="tag is-rounded is-primary is-light ml-small">{ p.position }</span>
                            </div>
                            <div className="column has-text-right">
                              <span className={`tag is-rounded is-${p.approval === 'pending' ? 'warning' : 'success'} is-light ml-small`}>{ t(`common:PARTICIPATION_${p.approval.toUpperCase()}`) }</span>
                            </div>
                          </div>
                        </li>
                      ) }
                    </ul>
                  </div>
                </div>
              </>
            ) }
          </div>

          <div className="box">
            { !feedbacks || !feedbacks.docs.length ? (
              <div className="columns">
                <div className="column has-text-centered">
                  <h2 className="title is-2 has-text-grey-light">
                    { t('common:NO_FEEDBACK_FOR_TRAINING') }
                  </h2>
                  <h3 className="subtitle is-4 has-text-grey-light">
                    { t('common:WRITE_FEEDBACK_NOW') }
                  </h3>
                  <span className="icon-next">
                    <span className="icon is-large has-text-grey-light">
                      <i className="lni lni-star-empty lni-2"></i>
                    </span>
                    <span className="icon is-large has-text-grey-light">
                      <i className="lni lni-star-empty lni-2"></i>
                    </span>
                    <span className="icon is-large has-text-grey-light">
                      <i className="lni lni-star-empty lni-2"></i>
                    </span>
                    <span className="icon is-large has-text-grey-light">
                      <i className="lni lni-star-empty lni-2"></i>
                    </span>
                    <span className="icon is-large has-text-grey-light">
                      <i className="lni lni-star-empty lni-2"></i>
                    </span>
                  </span>
                </div>
              </div>
            ) : (
              <>
                { feedbacks.docs.map(f => (
                  <>
                    <div key={`feedback-${f._id}`} className="columns is-vcentered">
                      <div className="column">{f.author.firstname} {f.author.lastname}</div>
                      <div className="column has-text-right has-text-warning">
                        <span className="icon-next">
                          { new Array(f.rating).fill().map((r, i) => (
                            <span key={`feedback-${f._id}-rating-${i}-filled`} className="icon">
                              <i className="lni lni-star-filled"></i>
                            </span>
                          )) }
                          { new Array(5 - f.rating).fill().map((r, i) => (
                            <span key={`feedback-${f._id}-rating-${i}-empty`} className="icon">
                              <i className="lni lni-star-empty"></i>
                            </span>
                          )) }
                        </span>
                      </div>
                      <div className="column is-narrow has-text-grey-light">{moment(f.createdAt).format('DD.MM.YYYY')}</div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <h4 className="title is-5 has-text-grey-light">{ t('common:FEEDBACK_TITLE') }</h4>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="content">{ f.feedback }</div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <h4 className="title is-5 has-text-grey-light">{ t('common:LEARNING_TITLE') }</h4>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="content">
                          <ul>
                            { f.learnings.map(l => (
                              <li key={`learning-${l._id}`}>{l.description}</li>
                            )) }
                          </ul>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </>
                ))
              }
                <div className="columns">
                  <div className="column">
                    <Pagination
                      isCentered
                      pages={feedbacks.totalPages}
                      currentPage={feedbacks.page}
                      onChange={page => setPage(page)}
                    />
                  </div>
                </div>
              </>
            )}
            <div className="columns mt-small">
              <div className="column has-text-centered">
                <Link to={`${url}/feedback`} className="button is-primary">{ t('common:WRITE_FEEDBACK') }</Link>
              </div>
            </div>
          </div>

        </div>
        <div className="column is-4">

          <div className="box">
            { !training.remote ? (
              <>
                <div className="columns">
                  <div className="column">
                    <p><strong>{ training.location }</strong></p>
                    <p> { training.street } </p>
                    <p> { training.zip } { training.city } </p>
                    <p> { training.country } </p>
                    <p className="mt-small">
                      <a href={`http://maps.google.com/maps?q=${encodeURIComponent(training.street + ',' + training.zip + ' ' + training.city + ',' + (training.country || ''))}`} target="_blank" rel="noreferrer">{ t('SHOW_ON_GOOGLE_MAPS') }</a>
                    </p>
                  </div>
                </div>
                <hr/>
              </>
            ) : null}
            { training && training.prices.map(price => (
              <div key={price.title} className="columns is-vcentered">
                <div className="column is-narrow">
                  <h4 className="title is-5 has-text-grey-light">{ price.title }</h4>
                  <h3 className="subtitle is-4">{ new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(price.price) }</h3>
                </div>
                <div className="column has-text-right">
                  <button onClick={() => dispatch(ActionCreators.goToTraining(training._id, price))} className={`button is-primary ${budget && budget.remaining < price.price ? 'disabled' : ''}`}>
                    { t('common:BOOK_NOW') }
                  </button>
                </div>
              </div>
            )) }
          </div>

        </div>
      </div>

      <Route
        path={`${path}/feedback`}
        render={props => (
          <Modal { ...props } close={() => history.push(path)}>
            <>
              <div className="columns">
                <div className="column">
                  <h2 className="title is-3 has-text-grey-light">{ t('common:CREATE_FEEDBACK_TITLE') }</h2>
                  <h2 className="subtitle is-4">{ t('common:CREATE_FEEDBACK_TEXT') }</h2>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">{t('common:FEEDBACK_RATING')}</label>
                    <div className="control has-text-warning">
                      <IconRating onChange={rating => handleFeedbackCreate(rating, 'rating')} className="icon-next" toggledClassName="lni lni-star-filled lni-3" untoggledClassName="lni lni-star-empty lni-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">{t('common:FEEDBACK_TEXT')}</label>
                    <div className="control">
                      <textarea className="textarea" rows="10" type="text" onChange={e => handleFeedbackCreate(e.target.value, 'feedback')} placeholder={t('common:FEEDBACK_TEXT')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">{t('common:FEEDBACK_LEARNINGS')}</label>
                  </div>
                  { feedbackCreate.learnings.map((l,i) => (
                    <div key={`create-learnings-${i}`} className="field has-addons">
                      <div className="control is-expanded">
                        <input className="input" onChange={e => handleFeedbackCreate(e.target.value, 'learnings', i)} type="text" placeholder={t('common:ENTER_LEARNING')} />
                      </div>
                      { i+1 === feedbackCreate.learnings.length ? (
                        <div className="control">
                          <button onClick={() => removeLearning(i)} className="button is-danger is-light">
                            {t('common:DELETE')}
                          </button>
                        </div>
                      ) : null }
                    </div>
                  ))}
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <button onClick={() => {
                    setFeedbackCreate({
                      ...feedbackCreate,
                      learnings: feedbackCreate.learnings.concat([{ description: null }])
                    })
                  }} className="button is-info is-light">{ t('common:ADD_LEARNING') }</button>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="buttons is-right">
                    <button className="button is-info is-light" onClick={() => history.push(url)}>{t('common:CANCEL')}</button>
                    <button className={`button is-success is-light ${isLoading ? 'is-loading' : ''}`} onClick={() => {
                      setIsLoading(true)
                      saveFeedback(feedbackCreate).then(() => {
                        history.push(url)
                        setIsLoading(false)
                      })
                    }} >{t('common:SAVE')}</button>
                  </div>
                </div>
              </div>
            </>
          </Modal>)} />
    </>
  ) : <Loader pageLoader /> )
}
