import * as type from '../constants/map'

const initialState = {
  data: [],
  mapView: false,
  loadingTime: null,
  startRenderingTime: null,
}

const map = (state = initialState, action) => {
  switch (action.type) {
  case type.UPDATE_MAP:
    return {
      ...state,
      data: action.data,
      mapView: true,
    }
  case type.UPDATE_DATA_LOADING_TIME:
    return {
      ...state,
      loadingTime: action.interval,
    }
  case type.SET_START_RENDERING_TIME:
    return {
      ...state,
      startRenderingTime: action.time,
    }
  case type.SYNC_FAILED_MAP:
    return { ...state, errorMessage: action.message, progress: false }
  default:
    return state
  }
}

export default map
