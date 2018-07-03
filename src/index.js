import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import dva from 'dvax'
import App from './App'
import './global.css'
render(
    <Provider store={dva._store}>
        <App />
    </Provider>,
    document.getElementById('root')
)