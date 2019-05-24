import React from 'react'
import { Calendar, LocaleConfig  } from 'react-native-calendars'

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв.',
    'Фев.',
    'Мар.',
    'Апр.',
    'Май',
    'Июн.',
    'Июл.',
    'Авг.',
    'Сен.',
    'Окт.',
    'Ноя.',
    'Дек.',
  ],
}
LocaleConfig.defaultLocale = 'ru'

const CustomCalendar = props => {
  return (
    <Calendar
      onDayPress={date => {
        props.clear()
        props.addShows(date)
        props.navigate('ShowsPage')
      }}
      monthFormat={'MMMM'}
      hideDayNames={true}
    />
  )
}

export default CustomCalendar
