import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link, Route, useRouteMatch, useHistory } from 'react-router-dom'

import ActionCreators from '../../actions'

import Modal from '../../components/Modal'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

import * as types from '../../constants/admin'

import './admin.scss'

export default function AdminUsers() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [currentPage, setPage] = useState(1)
  const [filterOpened, setFilter] = useState(true)
  const [dropDown, setDropDown] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)
  const [limit, setLimit] = useState(8)
  const [filteredEmployees, setFilteredEmployees] = useState([])
  const [modalEmployee, setEmployee] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const [employeeUpdate, setEmployeeUpdate] = useState(false)
  const [updateBudget, setUpdateBudget] = useState(false)


  const [selectedDepartment, setSelectedDepartment] = useState(undefined)
  const [selectedState, setSelectedState] = useState(undefined)
  const [searchString, setSearchString] = useState(undefined)

  const handleEmployeeUpdate = (val, key) => {
    setEmployeeUpdate({
      ...employeeUpdate,
      [key]: val
    })
  }

  const handleEmployeeBudgetUpdate = (val, key) => {
    if (key === 'budget') {
      setUpdateBudget({
        ...updateBudget,
        budget: parseInt(val, 10),
        remaining: (parseInt(val, 10) - parseInt(modalEmployee.budget.budget)) + parseInt(modalEmployee.budget.remaining, 10)
      })
    } else {
      setUpdateBudget({
        ...updateBudget,
        [key]: val
      })
    }
  }

  const resetFilters = () => {
    setSelectedState(undefined)
    setSelectedDepartment(undefined)
    setSearchString(undefined)
  }

  const fetchEmployees = useCallback(
    () => dispatch(ActionCreators.getCompanyEmployees()),
    [dispatch]
  )

  const fetchDepartments = useCallback(
    () => dispatch(ActionCreators.getCompanyDepartments()),
    [dispatch]
  )

  const deleteEmployee = useCallback(
    id => dispatch(ActionCreators.deleteCompanyEmployee(id)),
    [dispatch]
  )

  const updateEmployee = useCallback(
    employee => dispatch(ActionCreators.updateCompanyEmployee(employee)),
    [dispatch]
  )

  const updateEmployeeBudget = useCallback(
    (id, budget) => dispatch(ActionCreators.updateCompanyEmployeeBudget(id, budget)),
    [dispatch]
  )

  useEffect(() => fetchEmployees(), [fetchEmployees])
  useEffect(() => fetchDepartments(), [fetchDepartments])

  useEffect(() => {
    const detectOutsideClick = e => {
      if (!e.target.closest('.dropdown') && !(e.target.classList.contains('dropdown') && e.target.className.contains('navbar-item')) && dropDown) {
        setDropDown(false)
        setDropDown2(false)

        document.removeEventListener('click', detectOutsideClick)
      }
    }
    document.addEventListener('click', detectOutsideClick)
  }, [dropDown])

  const employees = useSelector(state => state && state.admin ? state.admin.employees : [])
  const departments = useSelector(state => state && state.admin ? state.admin.departments : [])

  useEffect(() => {
    const filtered = employees.docs ? employees.docs.filter(e => {
      let isIn = true

      if (searchString !== undefined && searchString !== '') {
        if (e.firstname.toLowerCase().indexOf(searchString.toLowerCase()) === -1 && e.lastname.toLowerCase().indexOf(searchString.toLowerCase()) === -1) isIn = false
      }

      if (isIn && selectedDepartment !== undefined) {
          if (e.department.name !== selectedDepartment) isIn = false
      }

      if (isIn && selectedState !== undefined) {
          if (e.activated !== selectedState) isIn = false
      }

      return isIn
    }) : []

    setPage(1)
    setFilteredEmployees(filtered)
  }, [selectedDepartment, selectedState, searchString, employees.docs])

  const offset = (currentPage - 1) * limit

  const { path, url } = useRouteMatch()
  const history = useHistory()

  console.log(url, path)

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
                  <label className="label">{ t('common:SEARCH_LABEL') }:</label>
                  <div className="control has-icons-right">
                    <input className="input is-rounded" type="text" value={searchString} placeholder={t('common:TYPE_SOMETHING')} onChange={ e => setSearchString(e.target.value) } />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:STATUS') }:</label>
                  <div className="control has-icons-right">
                    <div className={`dropdown ${dropDown ? 'is-active' : ''} is-block is-right`}>
                      <div className="dropdown-trigger" onClick={() => setDropDown(!dropDown)}>
                        <input className="input is-rounded" type="text" value={selectedState !== undefined ? (selectedState ? t('common:USER_ACTIVE') : t('common:USER_INACTIVE')) : t('common:ALL')} />
                        <span className="icon is-medium is-right is-clickable is-dropdown-input">
                          <i className="lni lni-chevron-down" />
                        </span>
                      </div>
                      <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <span className="dropdown-item" onClick={() => {
                            setSelectedState(true)
                            setDropDown(false)
                          }}>
                            { t('common:USER_ACTIVE') }
                          </span>
                          <span className="dropdown-item" onClick={() => {
                            setSelectedState(false)
                            setDropDown(false)
                          }}>
                            { t('common:USER_INACTIVE') }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">{ t('common:DEPARTMENT') }:</label>
                  <div className="control has-icons-right">
                    <div className={`dropdown ${dropDown2 ? 'is-active' : ''} is-block is-right`}>
                      <div className="dropdown-trigger" onClick={() => setDropDown2(!dropDown2)}>
                        <input className="input is-rounded" type="text" value={selectedDepartment ? selectedDepartment : t('common:ALL')} />
                        <span className="icon is-medium is-right is-clickable is-dropdown-input">
                          <i className="lni lni-chevron-down" />
                        </span>
                      </div>
                      <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          {departments && departments.docs ? departments.docs.map(d =>
                            <span className="dropdown-item" key={d._id} onClick={() => {
                              setSelectedDepartment(d.name)
                              setDropDown2(false)
                            }}>{ d.name }</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
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
              <div className="column is-3 is-clickable">
                <strong>{ t('common:NAME') }</strong>
              </div>
              <div className="column is-2 is-clickable">
                <strong>{ t('common:IDENTIFIER') }</strong>
              </div>
              <div className="column is-2">
                <strong>{ t('common:ROLES') }</strong>
              </div>
              <div className="column is-2 is-clickable">
                <strong>{ t('common:BUDGET') }</strong>
              </div>
              <div className="column is-1">
                <strong>{ t('common:STATUS') }</strong>
              </div>
              <div className="column is-2">
                <strong>{ t('common:ACTIONS') }</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      { filteredEmployees ? filteredEmployees.slice(offset, offset + limit).map(user => (
        <div className="columns" key={user._id}>
          <div className="column">
            <div className="box item-box">
              <div className="columns is-3 is-vcentered">
                <div className="column">
                  <strong>{ user.firstname } { user.lastname }</strong>
                </div>
                <div className="column is-2 has-text-grey-light">
                  { user.identifier }
                </div>
                <div className="column is-2">
                  <span className="tags">
                    { user.roles.map(role => (
                      <span key={`${user._id}-${role}`} className="tag">{ t(`roles:${role.toUpperCase()}`) }</span>
                    ))}
                  </span>
                </div>
                <div className="column is-2">
                  { new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(user.budget.remaining) } { t('common:OF') } { new Intl.NumberFormat('de-DE', { currencyDisplay: 'code', style: 'currency', currency: 'EUR' }).format(user.budget.budget) }
                </div>
                <div className="column is-1">
                  <span className={`tag is-light is-${user.activated ? 'success' : 'danger'}`}>{ user.activated ? t('common:USER_ACTIVE') : t('common:USER_INACTIVE') }</span>
                </div>
                <div className="column is-2">
                  <div className="buttons">
                    <Link className="button is-info is-light" data-tooltip={t('common:EDIT_USER_INFO')} to={`${path}/edit`} onClick={() => setEmployee(user)} >
                      <span className="icon is-small">
                        <i className="lni lni-lg lni-user"></i>
                      </span>
                    </Link>
                    <Link className="button is-info is-light" data-tooltip={t('common:EDIT_USER_BUDGET')} to={`${path}/budget`} onClick={() => setEmployee(user)} >
                      <span className="icon is-small">
                        <i className="lni lni-lg lni-credit-card"></i>
                      </span>
                    </Link>
                    <Link className="button is-light is-danger" data-tooltip={t('common:DELETE_USER')} to={`${path}/delete`} onClick={() => setEmployee(user)} >
                      <span className="icon is-small">
                        <i className="lni lni-lg lni-trash-can"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) : (
        <Loader
          startActions={[types.START_ADMIN_LOADING]}
          stopActions={[types.SUCCESS_ADMIN_LOADING, types.FAILURE_ADMIN_LOADING]}
          loaderName="training-list" />
      ) }

      <Pagination
        isCentered
        pages={Math.ceil(filteredEmployees.length / limit)}
        currentPage={currentPage}
        onChange={page => setPage(page)}
      />

      <Route
        path={`${path}/budget`}
        render={props => (
          <Modal
            { ...props }
            close={() => history.push(path)}>
            { modalEmployee ? (
              <>
                <div className="columns">
                  <div className="column">
                    <h2 className="title is-3 has-text-grey-light">{ t('common:UPDATE_USER_BUDGET') }</h2>
                    <h2 className="subtitle is-4">{ t('common:UPDATE_USER_BUDGET_TEXT') }</h2>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:BUDGET')}</label>
                      <div className="control">
                        <input className="input" type="number" onChange={e => handleEmployeeBudgetUpdate(e.target.value, 'budget')} defaultValue={modalEmployee.budget.budget} placeholder={t('common:BUDGET')} />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:REMAINING_BUDGET')}</label>
                      <div className="control">
                        <input className="input" type="number" onChange={e => handleEmployeeBudgetUpdate(e.target.value, 'remaining')} defaultValue={modalEmployee.budget.remaining} placeholder={t('common:REMAINING_BUDGET')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="buttons is-right">
                      <button className="button is-danger is-light" onClick={() => history.push(path)}>{t('common:CANCEL')}</button>
                      <button className={`button is-success is-light ${isLoading ? 'is-loading' : ''}`} onClick={() => {
                        setIsLoading(true)
                        updateEmployeeBudget(modalEmployee.budget._id, updateBudget).then(() => {
                          history.push(path)
                          setIsLoading(false)
                        })
                      }} >{t('common:DELETE')}</button>
                    </div>
                  </div>
                </div>
              </>
            ) : null }
          </Modal>)} />

      <Route
        path={`${path}/delete`}
        render={props => (
          <Modal
            { ...props }
            close={() => history.push(path)}>
            { modalEmployee ? (
              <>
                <div className="columns">
                  <div className="column">
                    <h2 className="title is-3 has-text-grey-light">{ t('common:DELETE_USER_CONFIRM') }</h2>
                    <h2 className="subtitle is-4">{ t('common:DELETE_USER_CONFIRM_TEXT') }</h2>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="buttons is-right">
                      <button className="button is-info is-light" onClick={() => history.push(path)}>{t('common:CANCEL')}</button>
                      <button className={`button is-danger is-light ${isLoading ? 'is-loading' : ''}`} onClick={() => {
                        setIsLoading(true)
                        deleteEmployee(modalEmployee._id).then(() => {
                          history.push(path)
                          setIsLoading(false)
                        })
                      }} >{t('common:DELETE')}</button>
                    </div>
                  </div>
                </div>
              </>
            ) : null }
          </Modal>)} />

      <Route
        path={`${path}/edit`}
        render={props => (
          <Modal
            { ...props }
            close={() => history.push(path)}>
            { modalEmployee ? (
              <>
                <div className="columns is-vcentered">
                  <div className="column">
                    <h2 className="title is-3 has-text-grey-light">{ t('common:USER_EDIT') }</h2>
                    <h2 className="subtitle is-4">{ t('common:USER_EDIT_TEXT') }</h2>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:FIRSTNAME')}</label>
                      <div className="control">
                        <input className="input" type="text" onChange={e => handleEmployeeUpdate(e.target.value, 'firstname')} defaultValue={modalEmployee.firstname} placeholder={t('common:FIRSTNAME')} />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                  <div className="field">
                    <label className="label">{t('common:LASTNAME')}</label>
                    <div className="control">
                      <input className="input" type="text" onChange={e => handleEmployeeUpdate(e.target.value, 'lastname')} defaultValue={modalEmployee.lastname} placeholder={t('common:LASTNAME')} />
                    </div>
                  </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:IDENTIFIER')}</label>
                      <div className="control">
                        <input className="input" type="text" onChange={e => handleEmployeeUpdate(e.target.value, 'identifier')} defaultValue={modalEmployee.identifier} placeholder={t('common:IDENTIFIER')} />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:INTERNAL_IDENTIFIER')}</label>
                      <div className="control">
                        <input className="input" type="text" defaultValue={modalEmployee.internalEmail} placeholder={t('common:INTERNAL_IDENTIFIER')} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                  <div className="field">
                    <label className="label">{ t('common:DEPARTMENT') }:</label>
                    <div className="control has-icons-right">
                      <div className={`dropdown ${dropDown3 ? 'is-active' : ''} is-block is-right`}>
                        <div className="dropdown-trigger" onClick={() => setDropDown3(!dropDown3)}>
                          <input className="input" type="text" value={employeeUpdate.department ? departments.docs.filter(d => d._id === employeeUpdate.department)[0].name : undefined} defaultValue={modalEmployee.department.name} />
                          <span className="icon is-medium is-right is-clickable is-dropdown-input">
                            <i className="lni lni-chevron-down" />
                          </span>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            {departments && departments.docs ? departments.docs.map(d =>
                              <span className="dropdown-item" key={d._id} onClick={() => {
                                handleEmployeeUpdate(d._id, 'department')
                                setDropDown3(false)
                              }}>{ d.name }</span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="column">
                    <div className="field">
                      <label className="label">{t('common:POSITION')}</label>
                      <div className="control">
                        <input className="input" type="text" onChange={e => handleEmployeeUpdate(e.target.value, 'position')} defaultValue={modalEmployee.position} placeholder={t('common:POSITION')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="buttons is-right">
                      <button className="button is-danger is-light" onClick={() => history.push(path)}>{t('common:CANCEL')}</button>
                      <button className={`button is-success is-light ${isLoading ? 'is-loading' : ''}`} onClick={() => {
                        setIsLoading(true)
                        updateEmployee({...employeeUpdate, _id: modalEmployee._id}).then(() => {
                          history.push(path)
                          setIsLoading(false)
                        })
                      }}>{t('common:SAVE')}</button>
                    </div>
                  </div>
                </div>
              </>
            ) : null }
          </Modal>
        )}
      />

    </>
  )
}
