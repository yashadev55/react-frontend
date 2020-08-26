import React, { Component } from "react";
import './login.css'
import ParticleComponent from "./ParticleComponent";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(
            this.state
        )
    }

    render() {

        if (this.props.auth.uid) {
            return <Redirect to='/home'/>
        }

        const {authError} = this.props

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
                        <form onSubmit={this.handleSubmit} className="signInForm">
                            <div className="username">
                                <label htmlFor='username'>Username: </label>
                                <input id='username' type="text" onChange={this.handleChange}/>
                            </div>
                            <div className="password">
                                <label htmlFor='password'>Password: </label>
                                <input id='password' type="password" onChange={this.handleChange}/>
                            </div>
                            <div className="signInBtnContainer">
                                <button type='submit' className="signInBtn">Sign In</button>
                                <div className='errorDiv'>
                                    {authError ? <small style={{color: "red"}}>{authError}</small> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)