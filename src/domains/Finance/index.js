import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { Link, useRouteMatch } from 'react-router-dom'

import ActionCreators from '../../actions'

import './finance.scss'

export default function Finance() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { url } = useRouteMatch()

  const [filterOpened, setFilter] = useState()
  const [spendings, setSpendings] = useState()
  const [sortKey, setSortKey] = useState()

  useEffect(() => {
    async function getSpenings () {
      const s = await dispatch(ActionCreators.getSpendings())
      setSpendings(s)
    }

    getSpenings()
  }, [dispatch])

  const resetFilters = () => null

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
                      <span className="lni lni-calender-alt"></span>
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
                      <span className="lni lni-chevron-down"></span>
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
                      <span className="lni lni-chevron-down"></span>
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
                      <span className="lni lni-chevron-down"></span>
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
                <strong>{ t('common:SPENDING_OF') }</strong> <span className="sort-icon">{ sortKey === 'title' ? (
                  <span className="lni lni-sm lni-chevron-down"></span>
                ) : (
                  <span className="lni lni-sm lni-chevron-up"></span>
                ) }</span>
              </div>
              <div className="column is-2 is-clickable" onClick={() => setSortKey('approved')}>
                <strong>{ t('common:PRICE') }</strong> <span className="sort-icon">{ sortKey === 'price' ? (
                  <span className="lni lni-sm lni-chevron-down"></span>
                ) : (
                  <span className="lni lni-sm lni-chevron-up"></span>
                ) }</span>
              </div>
              <div className="column is-2 is-clickable" onClick={() => setSortKey('amount')}>
                <strong>{ t('common:DATE') }</strong> <span className="sort-icon">{ sortKey === 'fromDate' ? (
                  <span className="lni lni-sm lni-chevron-down"></span>
                ) : (
                  <span className="lni lni-sm lni-chevron-up"></span>
                ) }</span>
              </div>
              <div className="column is-2">
                <strong>{ t('common:APPROVED') }</strong>
              </div>
              <div className="column is-2">
                <strong>{ t('common:ACTIONS') }</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      { spendings && spendings.docs.length && spendings.docs.map(budget => (
        budget.spendings.sort((a, b) => (a[sortKey] > b[sortKey]) ? 1 : -1).map(item => (
          <div className="columns" key={item._id}>
            <div className="column">
              <div className="box item-box">
                <div className="columns spending-item is-vcentered">
                  <div className="column is-4">
                    <strong>{ budget.employee.firstname } { budget.employee.lastname }</strong>
                  </div>
                  <div className="column is-2">
                    { new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(item.amount) }
                  </div>
                  <div className="column is-2">
                    { moment(item.createdAt).format('DD.MM.YYYY') }
                  </div>
                  <div className="column is-2">
                    <span className="icon is-medium">
                      { item.approved ? (<span className="has-text-success lni lni-2 lni-checkmark-circle"></span>) : (<span className="has-text-danger lni lni-2 lni-cross-circle"></span>) }
                    </span>
                  </div>
                  <div className="column is-2">
                    <Link to={`${url}/spendings/${item._id}`} className="button is-light button-has-icon"><span>{ t('common:TO_SPENDING') }</span> <span className="icon"><span className="lni lni-chevron-right"></span></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ))}
    </>
  )
}
