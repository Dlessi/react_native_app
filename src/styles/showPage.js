import { StyleSheet } from 'react-native'

const showPage = StyleSheet.create({
  showListText: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: '500',
    color: '#333333',
    margin: 15,
    fontSize: 15,
  },

  showListTextView: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 15,
    borderColor: '#e9e9e9',
    borderWidth: 2,
    borderRadius: 5,
  },

  buttonText: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    fontWeight: '700',
    color: '#e9e9e9',
    fontSize: 10,
  },

  image: {
    width: 80,
    height: 130,
    borderRadius: 2,
  },

  showView: {
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
  },

  nameText: {
    fontFamily: 'sans-serif',
    textAlign: 'left',
    fontWeight: '700',
    color: '#333333',
    fontSize: 15,
    maxWidth: 200,
  },

  textView: {
    marginHorizontal: 15,
  },

  textPremiered: {
    fontFamily: 'sans-serif',
    fontWeight: '900',
    color: '#e9e9e9',
    fontSize: 17,
  },

  episodView: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    marginTop: 35,
    marginBottom: 10,
    borderRadius: 2,
    maxWidth: 400,
  },
  episodText: {
    fontFamily: 'sans-serif',
    margin: 5,
  },
})

export default showPage
