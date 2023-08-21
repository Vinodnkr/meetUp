import {Redirect, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import Register from './components/Register'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />

    <Route path="/bad-path" component={NotFound} />

    {/* Default catch-all route */}
    <Route path="*">
      <Redirect to="/bad-path" />
    </Route>
  </Switch>
)

export default App
