import React from 'react'
import './style.css'
class App extends React.Component { 
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.onkeydown = this.onkeydown.bind(this)
    }
    onkeydown(event){
        const keyCode = event.keyCode
    }
    render() {
        return <h2>{'Welcome'}</h2>
    }
}
export default App