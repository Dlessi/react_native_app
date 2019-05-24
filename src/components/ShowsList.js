import React, { useState } from 'react'
import Show from '../components/Show'
import { View, Text } from 'react-native'
import showPage from '../styles/showPage'
import { Button } from 'react-native-elements'

const monthNames = [
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
]

const ShowsList = props => {
  const [showAll, setShowAll] = useState(false)
  let { shows, date } = props,
    s = 'Покзать основные'

  const dateString =
    '' +
    date.getDate() +
    ' ' +
    monthNames[date.getMonth()] +
    ' ' +
    date.getFullYear()

  if (!showAll) {
    let cur = shows.length - 2
    shows = shows.slice(0, 2)
    s = 'Еще ' + cur + ' сериалов '
  }
  let showslist = shows.map(elem => {
    return <Show elem={elem} key={elem.id} openImage={props.openImage} />
  })
  return (
    <View transparent key={date.toISOString()}>
      <View style={showPage.showListTextView}>
        <Text style={showPage.showListText}> {dateString}</Text>
      </View>
      <View>{showslist}</View>
      <Button
        onPress={() => {
          setShowAll(!showAll)
        }}
        title={s}
        buttonStyle={showPage.button}
        titleStyle={showPage.buttonText}
      />
    </View>
  )
}

export default ShowsList
