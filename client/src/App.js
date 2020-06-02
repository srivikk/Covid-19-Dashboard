import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
// import Home from './pages/Home';
import Dashboard from './components/Dashboard/Dashboard';

// function App() {
//   return (
//     <Dashboard />
//   );
// }

function App() {
  const App = () => (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
      </Switch>
    </div>
  )
  return(
    <Switch>
      <Dashboard/>
    </Switch>
  )
}

export default App



