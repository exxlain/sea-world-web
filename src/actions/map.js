import * as types from '../constants/map'

export const getNextStep = number => ({
  type: types.SYNC_MAP,
  number,
})


export const updateMap = data => ({
  type: types.UPDATE_MAP,
  data,
})

export const syncFailed = message => ({
  type: types.SYNC_FAILED_MAP,
  message,
})
