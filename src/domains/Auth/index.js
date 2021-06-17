import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ActionCreators from '../../actions'

import logo from '../../assets/logo.svg'

import './auth.scss'

export default function Auth() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const employee = useSelector(state => state.employee)
  const company = useSelector(state => state.company)

  const [ identifier, setIdentifier ] = useState('janeley0@netvibes.com')
  const [ password, setPassword ] = useState('!!TestTest12345!!')
  const [ loading, setLoading ] = useState(false)

  const signIn = async () => {
    setLoading(true)
    await dispatch(ActionCreators.authenticate(identifier, password))
    setLoading(false)
  }


  if (employee && employee.activated && employee.authenticated) return <Redirect to='/dashboard' />

  const baseUrl = process.env.NODE_ENV !== 'production' ? 'https://sproud.dev' : 'https://sproud.io'

  return (
    <section className="section is-fullwidth" style={{ minHeight: '100vh', paddingTop: '0.75em', paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
      <div className="columns is-vcentered" style={{ minHeight: '100vh' }}>
        <div className="column has-text-right">
          <div className="columns" style={{ minHeight: '80vh' }}>
            <div className="column is-offset-4 has-text-left is-flex is-flex-direction-column is-justify-content-center">
              <img src={logo} alt="sproud." className="is-align-self-flex-start mb-auto" />

              <h1 className="title is-1 has-text-primary mb-0" style={{ fontWeight: 900 }}>Sign In</h1>
              <p className="has-text-grey-light mb-6 mt-6" dangerouslySetInnerHTML={{ __html: t('common:CLAIM', { company: company && company.name ? ` <strong className="has-text-grey">${company.name}</strong>` : '' }) }} />

              <div className="field mb-3">
                <div className="control">
                  <input className="input" type="text" value={identifier} placeholder={ t('common:IDENTIFIER') } onChange={e => setIdentifier(e.target.value) }/>
                </div>
              </div>
              <div className="field mb-5">
                <div className="control">
                  <input className="input" type="password" value={password} placeholder={ t('common:PASSWORD') } onChange={e => setPassword(e.target.value) }/>
                </div>
              </div>

              <div className="field mb-5 has-text-right">
                <div className="control">
                  <Link to="/recover-password" className="has-text-grey-light">{ t('common:PASSWORD_FORGET_LINK') }</Link>
                </div>
              </div>

              <div className="field mb-5">
                <div className="control">
                  <button onClick={signIn} className={`button is-fullwidth is-primary has-text-white has-text-weight-bold ${loading ? 'is-loading' : ''}`} style={{ height: '3.5em' }}>{ t('common:LOGIN') }</button>
                </div>
              </div>

              <small style={{ marginTop: 'auto'}} className="has-text-grey-light">{ t('common:NO_ACCOUNT_YET') } <a href={`${baseUrl}/signup`}>{ t('common:TRY_FOR_FREE') }</a></small>
            </div>
            <div className="column is-2" />
          </div>
        </div>
        <div className="column has-primary-background is-hidden-touch">
          <div className="columns" style={{ minHeight: '100vh' }}>
            <div className="column is-2" />
            <div className="column is-6">
              {/*super clever marketing stuff goes here some day*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
