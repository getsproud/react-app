import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { useRouteMatch, Link } from 'react-router-dom'

import * as types from '../../constants/training'

import ActionCreators from '../../actions'

import Loader from '../../components/Loader'

import './training.scss'

export default function Training() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { url } = useRouteMatch()

  const [filterOpened, setFilter] = useState(true)
  const [sortKey, setSortKey] = useState('title')

  const resetFilters = () => null

  const trainings = useSelector(state => state.training.department)

  useEffect(() => {
    dispatch(ActionCreators.getTrainingsForDepartment())
  }, [dispatch])

  const getPrice = prices => {
    const [min, max] = prices.reduce(([prevMin,prevMax], {price}) =>
      [Math.min(prevMin, price), Math.max(prevMax, price)], [Infinity, -Infinity])

    return {min, max}
  }

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="box">
            <div className={`columns is-vcentered ${filterOpened ? '' : 'is-gapless is-marginless'}`} >
              <div className="column">
                <h5 className="is-clickable filter-title title is-5 has-text-grey-light" onClick={() => setFilter(!filterOpened)}>
                  <span className="icon-text">
                    <span className="icon">
                      <span className="lni lni-funnel"></span>
                    </span>
                    <span>{ t('common:FILTER') }</span>
                    <span className="icon">
                      {filterOpened ? <span className="lni lni-sm lni-chevron-up"></span> : <span className="lni lni-sm lni-chevron-down"></span>}
                    </span>
                  </span>
                </h5>
              </div>
              <div className="column has-text-right">
                <span className="button is-primary is-light" onClick={() => resetFilters()}>{ t('common:RESET_FILTERS') }</span>
              </div>
            </div>
            <div className="columns filter-box" style={{ display: filterOpened ? 'flex' : 'none'}}>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:FROM_DATE') }:</label>
                  <div className="control has-icons-right">
                    <input className="input is-rounded" type="date" value={moment().format('YYYY-MM-DD')} />
                    <span className="icon is-small is-right is-clickable is-dropdown-input">
                      <span className="lni lni-16 lni-calender-alt"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:TO_DATE') }:</label>
                  <div className="control has-icons-right">
                    <input className="input is-rounded" type="date" value={moment().add(1, 'year').format('YYYY-MM-DD')} />
                    <span className="icon is-small is-right is-clickable is-dropdown-input">
                      <span className="lni lni-16 lni-calender-alt"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:COUNTRY') }:</label>
                  <div className="control has-icons-right">
                    <input className="input is-rounded" type="text" value={t('common:ALL')} />
                    <span className="icon is-small is-right is-clickable is-dropdown-input">
                      <span className="lni lni-16 lni-chevron-down"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns filter-box" style={{ display: filterOpened ? 'flex' : 'none'}}>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:MIN_PRICE') }:</label>
                  <div className="control">
                    <input className="input is-rounded" type="text" value="0 €" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:MAX_PRICE') }:</label>
                  <div className="control">
                    <input className="input is-rounded" type="text" value="9999 €" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:CATEGORY') }:</label>
                  <div className="control has-icons-right">
                    <input className="input is-rounded" type="text" value={t('common:ALL')} />
                    <span className="icon is-small is-right is-clickable is-dropdown-input">
                      <span className="lni lni-16 lni-chevron-down"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="box title-box">
            <div className="columns">
              <div className="column is-4 is-clickable" onClick={() => setSortKey('title')}>
                <strong>{ t('common:TITLE') }</strong> <span className="sort-icon">{ sortKey === 'title' ? (<span className="lni lni-sm lni-chevron-down"></span>) : (<span className="lni lni-sm lni-chevron-up"></span>) }</span>
              </div>
              <div className="column is-2 is-clickable" onClick={() => setSortKey('fromDate')}>
                <strong>{ t('common:DATE') }</strong> <span className="sort-icon">{ sortKey === 'fromDate' ? (<span className="lni lni-sm lni-chevron-down"></span>) : (<span className="lni lni-sm lni-chevron-up"></span>) }</span>
              </div>
              <div className="column is-2">
                <strong>{ t('common:LOCATION') }</strong>
              </div>
              <div className="column is-2 is-clickable" onClick={() => setSortKey('price')}>
                <strong>{ t('common:PRICE') }</strong> <span className="sort-icon">{ sortKey === 'price' ? (<span className="lni lni-sm lni-chevron-down"></span>) : (<span className="lni lni-sm lni-chevron-up"></span>) }</span>
              </div>
              <div className="column is-2">
                <strong>{ t('common:ACTIONS') }</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      { trainings && trainings.docs.length ? trainings.docs.sort((a, b) => (a[sortKey] > b[sortKey]) ? 1 : -1).map(item => (
        <div className="columns" key={item._id}>
          <div className="column">
            <div className="box item-box">
              <div className="columns training-item is-vcentered">
                <div className="column is-4">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <span className="icon has-text-grey-light">
                        <span className="lni lni-2 lni-graduation"></span>
                      </span>
                    </div>
                    <div className="column">
                        <strong>{ item.title }</strong>
                    </div>
                  </div>
                </div>
                <div className="column is-2">
                  { moment(item.fromDate).format(t('common:DATE_WO_YEAR')) } - { moment(item.toDate).format(t('common:DATE_FULL')) }
                </div>
                <div className="column is-2 training-location">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      { item.remote ? (
                        <span className="icon has-text-grey-light">
                          <span className="lni lni-2 lni-world"></span>
                        </span>
                      ) : (
                        <span className="icon has-text-grey-light">
                          <span className="lni lni-2 lni-map-marker"></span>
                        </span>
                      ) }
                    </div>
                    <div className="column">
                        { item.remote ? 'Remote' : `${item.city}${ item.country ? ', ' + item.country  : '' }` }
                    </div>
                  </div>
                </div>
                <div className="column is-2">
                  { new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(getPrice(item.prices).min) }
                  {` - `}
                  { new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(getPrice(item.prices).max) }
                </div>
                <div className="column is-2">
                  <Link to={`${url}/${item._id}`} className="button is-light button-has-icon"><span>{ t('common:TO_TRAINING') }</span> <span className="icon"><span className="lni lni-chevron-right"></span></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) : (
        <Loader
          startActions={[types.START_FETCHING_TRAININGS]}
          stopActions={[types.SUCCESS_FETCHING_TRAININGS, types.FAILURE_FETCHING_TRAININGS]}
          loaderName="training-list" />
      ) }
    </>
  )
}
