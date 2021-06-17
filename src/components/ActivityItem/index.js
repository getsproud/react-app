import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import Feedback from '../LineIcons/Regular/thumbs-up'
import Brownbag from '../LineIcons/Regular/calender-alt-4'
import Spending from '../LineIcons/Regular/fireworks'

import ActionCreators from '../../actions'

import './activity-item.scss'

export default function ActivityItem({item}) {
  const { t } = useTranslation()

  const getActivitIcon = type => {
    if (type === 'feedback') return <Feedback />
    else if (type === 'brownbag') return <Brownbag />
    else if (type === 'spending') return <Spending />
  }

  return (
    <li className="activity-item">
      <div className="columns is-vcentered">
        <div className="column is-2">
          <div className={`activity-type activity-type-${item.type}`}>
            {getActivitIcon(item.type)}
          </div>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <p className="activity-title">
                {t(`activities:${item.title.toUpperCase()}`)}
              </p>
              <p className="activity-text" dangerouslySetInnerHTML={{ __html: t(`activities:${item.translation.toUpperCase()}`, { ...item, date: moment(item.date).format('DD.MM.') }) }}/>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
