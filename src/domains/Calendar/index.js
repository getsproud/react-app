import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/de'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.scss'

moment.locale('de')
const localizer = momentLocalizer(moment)

export default function CalendarView() {
  const { t } = useTranslation()
  const events = [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "JSConf Europe 2021"
      }
    ]

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            messages={{
              next: t('common:NEXT'),
              previous: t('common:PREV'),
              today: t('common:TODAY'),
              month: t('common:MONTH'),
              week: t('common:WEEK'),
              day: t('common:DAY'),
              agenda: t('common:AGENDA'),
              date: t('common:DATE'),
              time: t('common:TIME'),
              event: t('common:EVENT'),
            }}
            style={{ height: 1000 }}
          />
        </div>
      </div>
    </div>
  )
}
