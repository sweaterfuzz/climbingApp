import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import HomeScreen from './screens/HomeScreen'
import NewEntryScreen from './screens/NewEntryScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newEntry">
          <NewEntryScreen/>
        </Route>
        <Route path="/">
          <HomeScreen/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
