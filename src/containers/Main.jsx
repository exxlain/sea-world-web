import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from '../components/Main/Main'
import { getNextStep } from '../actions/map'

const mapStateToProps = () => {
  const { map: { data } } = global.store.getState()
  return {
    data,
  }
}

const mapDispatchToProps = dispatch =>bindActionCreators({
  getNextStep,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
