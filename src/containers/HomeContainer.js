import Home from '../components/Home'
import { addShows, clear } from '../actions/shows'
import { connect } from 'react-redux'

const mapDsiaptchToProps = dispatch => {
  return {
    addShows: date => {
      dispatch(addShows(date))
    },
    clear: () => {
      dispatch(clear())
    },
  }
}

export default connect(
  null,
  mapDsiaptchToProps
)(Home)
