import { createLogicMiddleware } from 'redux-logic'
import logics from '../logics'

const deps = {
}

const logicMiddleware = createLogicMiddleware(logics, deps)

export default logicMiddleware
