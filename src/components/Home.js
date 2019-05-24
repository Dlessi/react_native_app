import React, { Component } from 'react'
import CustomCalendar from './CustomCalendar'
import homeStyles from '../styles/home'
import { View, Text, Image } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'SUPER FILM',
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
    headerTitleStyle: {
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 'auto',
      fontFamily: 'sans-serif',
      flex: 1,
    },
  }



  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={homeStyles.container}>
        <View style={homeStyles.imageView}>
          <Image
            style={homeStyles.image}
            source={require('../resources/Icon_tele.png')}
          />
        </View>
        <View style={homeStyles.textView}>
          <Text style={homeStyles.text}>
            Для получения списка сериалов, пожалуйста выберите необходимый месяц
            и день
          </Text>
        </View>
        <View style={homeStyles.calendarView}>
          <CustomCalendar navigate={navigate} addShows={this.props.addShows} clear = {this.props.clear}/>
        </View>
      </View>
    )
  }
}

export default Home
