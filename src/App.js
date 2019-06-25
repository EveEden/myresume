import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </Router>
    </div>                      
  )
}  

export default App
