import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import dva,{ Model, Fetch } from 'dvax'
import App from './App'
import model from './model'
import './global.css'

const fetch = Fetch({ 
    baseUrl: `http://1.1.1.1`,
    bodyParser(data){
        const postdata = new FormData()
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                postdata.append(k, data[k])
            }
        }
        return postdata
    }
})
dva.start({ sagaInjection: { fetch } })
Model.create(model)

render(
    <Provider store={dva._store}>
        <App />
    </Provider>,
    document.getElementById('root')
)