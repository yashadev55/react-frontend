import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "./components/auth/login";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route path='/' component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
