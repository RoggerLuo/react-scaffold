import React from 'react'
import './global.css'
import './style.css'
import { Model } from 'dvax'
import model from './model'
Model.create(model)
class App extends React.Component { 
    constructor(props) {
        super(props)
    }
    render() {
        return <h2>{'Welcome'}</h2>
    }
}
export default App