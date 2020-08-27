import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from "./components/auth/login";
import Home from "./components/home/home";
import Topbar from "./components/layout/topbar/topbar";
import Navbar from "./components/layout/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
