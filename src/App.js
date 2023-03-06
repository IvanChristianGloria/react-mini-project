import React, { Component } from 'react'
import Router from './Router'
import Home from './module/Home/Home'

class App extends Component {
    render () {
        return (
            <React.Fragment>
                <Router/> 
            </React.Fragment>
        )
    }
} 

export default App