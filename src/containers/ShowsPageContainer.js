import ShowsPage from '../components/ShowsPage'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    schedule: state.schedule,
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(ShowsPage)
