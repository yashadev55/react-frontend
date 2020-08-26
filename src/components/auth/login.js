import React, { Component } from "react";
import './login.css'
import ParticleComponent from "./ParticleComponent";

class Login extends Component {
    render() {
        return (
            <div className="loginContainer">
                <div className="particleContainer">
                    <ParticleComponent/>
                </div>
                <div className="signIn">
                    <div className="signInLogo">
                        <i className="fas fa-tree"></i>
                       <h1>Impact Terra</h1>
                    </div>
                    <div className="signInText">
                        <p>Welcome to our website, please login to continue</p>
                    </div>
                    <div className="signInFormContainer">
                        <form className="signInForm">
                            <div className="login">
                                <label>Login: </label>
                                <input type="text"/>
                            </div>
                            <div className="password">
                                <label>Password: </label>
                                <input type="password"/>
                            </div>
                        </form>
                    </div>
                    <div className="signInBtnContainer">
                        <button className="signInBtn">Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login