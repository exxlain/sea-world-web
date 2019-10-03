import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logic from '../logic'

export const createMiddlewareEnhancer = () => {
  const middleware = []
  middleware.push(thunk)
  middleware.push(logic)
  return applyMiddleware(...middleware)
}
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

export const createEnhancer = () => {
  const enhancers = []
  enhancers.push(createMiddlewareEnhancer())
  return composeEnhancers(...enhancers)
}
