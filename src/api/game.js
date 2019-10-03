import { I18n } from 'react-redux-i18n'
import { CHANNEL_PROGRAM_OPTIONS } from '../constants/channels'
import { PROGRAM_OPTIONS_TIMEOUT } from '../constants/timeouts'
import openCable from './cable'

const ERROR_CODE_LOCAL_TIMEOUT = 9999

const errorLocalTimeout = () => ({
  msg: I18n.t('errors.error_timeout'),
  code: ERROR_CODE_LOCAL_TIMEOUT,
})

const removeTimer = () => {
  clearInterval(global.programOptionChannelTimer)
}

const createTimer = (response, subscription) => {
  global.programOptionChannelTimer = setInterval(() => {
    response({ error: errorLocalTimeout(), isFinished: true })
    subscription.unsubscribe()
    removeTimer()
  }, PROGRAM_OPTIONS_TIMEOUT)
}

const normalize = (data) => {
  const { error } = data
  if (error) {
    switch (error.code) {
    case 1000:
      error.msg = I18n.t('errors.error_timeout')
      break
    default:
      error.msg = I18n.t('errors.error_timeout')
      break
    }
  }
  return {
    ...data,
    error,
  }
}

const programOptionChannel = ({ request, response }) => {
  const cable = openCable()
  const subscription = cable.subscriptions.create(CHANNEL_PROGRAM_OPTIONS, {
    connected() {
      request(this)
    },
    received(data) {
      removeTimer()
      const normalizedData = normalize(data)
      const { progress: { step, total_steps }, error } = data
      const isFinished = error || step === total_steps
      response(normalizedData, isFinished)
      if (isFinished) {
        this.unsubscribe()
      } else {
        createTimer(response, subscription)
      }
    },
  })
  createTimer(response, subscription)
  return subscription
}

export default programOptionChannel
