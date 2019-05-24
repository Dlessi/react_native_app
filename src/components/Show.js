import React from 'react'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import showPage from '../styles/showPage'

const Show = props => {
  const { elem } = props
  const { name, image } = elem.show,
    { season, number } = elem,
    premiered = elem.show.premiered.slice(0, 4)
  let source
  const sendUri = () => {
    console.log('send')
    if (image) props.openImage(image.original)
    else props.openImage(null)
  }
  if (image) source = { uri: image.medium }
  else source = require('../resources/not_found.png')
  return (
    <View style={showPage.showView}>
      <TouchableHighlight onPress={sendUri}>
        <Image style={showPage.image} source={source} />
      </TouchableHighlight>
      <View style={showPage.textView}>
        <Text style={showPage.nameText}>{name}</Text>
        <Text style={showPage.textPremiered}>{premiered}</Text>
        <View style={showPage.episodView}>
          <Text style={showPage.episodText}>Сезон : {season}</Text>
          <Text style={showPage.episodText}>Эпизод : {number}</Text>
        </View>
      </View>
    </View>
  )
}

export default Show
