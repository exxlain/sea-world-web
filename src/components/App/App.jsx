import React from 'react'
import Welcome from '../Welcome/Welcome'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <Welcome />
        </div>
      </div>
    )
  }
}

export default App
