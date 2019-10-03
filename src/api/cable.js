import ActionCable from 'actioncable'

const openCable = () => {
  if (global.WsIsOpen) {
    return global.cable
  }
  global.WsIsOpen = true

  const { secrets: { accessToken, unitToken } } = store.getState()

  if (!accessToken || !unitToken) {
    return null
  }

  let protocol = 'wss'

  if (process.env.NODE_ENV !== 'production') {
    protocol = 'ws'
  }

  const { host } = window.location
  const encodeData = data => Object.keys(data).map(key => (
    [key, data[key]].map(encodeURIComponent).join('=')
  )).join('&')

  const params = encodeData({ access_token: accessToken.token, unit_token: unitToken })
  const cable = ActionCable.createConsumer(`${protocol}://${host}/cable?${params}`)

  global.cable = cable
  return cable
}

export default openCable
