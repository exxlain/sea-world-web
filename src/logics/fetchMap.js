import { createLogic } from 'redux-logic'
import {
  SYNC_MAP,
  SYNC_CANCEL_MAP,
} from '../constants/map'
import {
  updateMap, syncFailed,
} from '../actions/map'
import gameChannel from '../api/game'

const fetchMapLogic = createLogic({
  type: SYNC_MAP,
  cancelType: SYNC_CANCEL_MAP,

  process(_, dispatch, done) {
    gameChannel({
      request: (channel) => {
        channel.perform('get_map')
      },
      response: (response) => {
        const { data, error } = response
        if (error) {
          dispatch(syncFailed(error))
        } else {
          dispatch(updateMap(data))
        }
          done()
      },
    })
  },
})

export default fetchMapLogic
