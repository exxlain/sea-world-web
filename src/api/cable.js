import ActionCable from 'actioncable'

const openCable = () => {
  if (global.WsIsOpen) {
    return global.cable
  }
  global.WsIsOpen = true

  let protocol = 'wss'

  const { host } = window.location

  const cable = ActionCable.createConsumer(`${protocol}://${host}/cable`)

  global.cable = cable
  return cable
}

export default openCable
