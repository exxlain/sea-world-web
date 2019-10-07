import * as type from '../constants/map'

const initialState = {
  data: [
    ['penguin', 'whale', null, 'penguin', 'whale', null, 'penguin', 'whale', null, 'penguin'],
    [ null, 'penguin', 'whale', null, 'penguin', 'whale', null, 'penguin', 'whale', null],
    ['penguin', 'whale',  'whale', null, 'penguin', 'whale', null, 'penguin', 'whale', null],
    ['penguin', 'whale', null, 'penguin', 'whale', 'whale', null, 'penguin', 'whale', null],
    ['penguin', 'whale', null, 'penguin', 'penguin', 'whale', null, 'penguin', 'whale', null],
  ],
  errorMessage: '',
}

const map = (state = initialState, action) => {
  switch (action.type) {
  case type.UPDATE_MAP:
    return {
      ...state,
      data: action.data,
    }
  case type.SYNC_FAILED_MAP:
    return { ...state, errorMessage: action.message }
  default:
    return state
  }
}

export default map
