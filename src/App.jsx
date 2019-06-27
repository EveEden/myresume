import React from 'react'
import { HashRouter as HashRouter, Route, Switch } from 'react-router-dom'


import './App.css'

import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Resume from './components/Resume'
import Projects from './components/Projects'
import MyStyle from './components/MyStyle'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <HashRouter basename="/">
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/mystyle' component={MyStyle} />
        <Route path='/contact' component={Contact} />
    
        <Route exact path="/mylinkedin" component={() => window.location = 'https://www.linkedin.com/in/eve-henare-80a9a1157/'} />
        <Route exact path="/mygithub" component={() => window.location = 'https://github.com/EveEden'} />
        <Route exact path="/myfreecodecamp" component={() => window.location = 'https://www.freecodecamp.org/eve_eden'} />
      </Switch>
    </HashRouter>
    </>                    
  )
}  

export default App
