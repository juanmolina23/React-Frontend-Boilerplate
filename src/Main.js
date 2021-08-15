import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

import App from './App'

ReactDOM.render(<App />, document.querySelector('#app'))

if (module.hot) {
	module.hot.accept()
}
