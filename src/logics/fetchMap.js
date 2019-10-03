import { createLogic } from 'redux-logic'
import mapEndpoint from '../api/mapEndpoint'
import { SYNC_MAP, SYNC_CANCEL_MAP } from '../constants/map'
import {
  updateMap, syncFailed, updateDataLoadingTime, setStartRenderingTime,
} from '../actions/map'

const shadowInLogic = createLogic({
  type: SYNC_MAP,
  cancelType: SYNC_CANCEL_MAP,

  process({ action }, dispatch, done) {
    const start = new Date()
    mapEndpoint.getMap(action.number)
      .then((response) => {
        const end = new Date()
        const interval = (end - start)
        dispatch(updateDataLoadingTime(interval))
        const { data } = response
        dispatch(setStartRenderingTime(end))
        dispatch(updateMap(data, interval))
        done()
      }).catch((error) => {
        dispatch(syncFailed(error))
        return false
      })
  },
})

export default shadowInLogic
