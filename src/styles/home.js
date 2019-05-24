import { StyleSheet } from 'react-native'

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: '500',
    color: '#333333',
    flex: 23 / 35,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    flex: 3 / 7,
    marginHorizontal: 'auto',
    resizeMode: 'contain',
  },
  calendarView: {
    flex: 3,
    justifyContent: 'flex-end',
  },
})

export default homeStyles
