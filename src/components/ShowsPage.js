import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import ShowsList from '../components/ShowsList'
import Load from '../components/Load'
import ImageView from 'react-native-image-view'

class ShowsPage extends Component {
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
  state = {
    isVisibleBigImage: false,
    images: [
      {
        source: require('../resources/not_found.png'),
        title: 'original image',
        width: 806,
        height: 720,
      },
    ],
  }
  openOriginalImage(uri) {
    let source = uri ? { uri: uri } : require('../resources/not_found.png')
    this.setState({
      isVisibleBigImage: true,
      images: [
        {
          source: source,
          title: 'original image',
          width: 806,
          height: 720,
        },
      ],
    })
  }

  render() {
    const { loading, schedule } = this.props

    if (schedule.length === 0) return <Load />

    return (
      <ScrollView>
        {schedule.map(elem => {
          return (
            <ShowsList
              shows={elem.shows}
              date={elem.date}
              key={elem.date}
              openImage={this.openOriginalImage.bind(this)}
            />
          )
        })}
        <View>{loading ? <Load /> : null}</View>
        <ImageView
          images={this.state.images}
          isVisible={this.state.isVisibleBigImage}
        />
      </ScrollView>
    )
  }
}

export default ShowsPage
