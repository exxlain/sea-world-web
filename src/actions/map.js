import * as types from '../constants/map'

export const sync = number => ({
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

export const updateDataLoadingTime = interval => ({
  type: types.UPDATE_DATA_LOADING_TIME,
  interval,
})

export const setStartRenderingTime = time => ({
  type: types.SET_START_RENDERING_TIME,
  time,
})
