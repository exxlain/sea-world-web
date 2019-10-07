import openCable from './cable'
const CHANNEL_GAME = 'GameChannel'

const gameChannel = ({ request, response }) => {
  const cable = openCable()
  const subscription = cable.subscriptions.create(CHANNEL_GAME, {
    connected() {
      request(this)
    },
    received(data) {
      response(data)
        this.unsubscribe()
    },
  })
  return subscription
}

export default gameChannel
