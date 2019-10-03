import { connect } from 'react-redux'
import Map from '../../components/Map/Map'

const mapStateToProps = () => {
  const { map: { data } } = global.store.getState()
  const { map: { startRenderingTime } } = global.store.getState()
  return {
    data,
    startRenderingTime,
  }
}

export default connect(mapStateToProps)(Map)
