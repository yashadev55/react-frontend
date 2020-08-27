import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './topbar.css'
import {signOut} from "../../../store/actions/authActions";

class Topbar extends Component{


    render() {

        const {userEmail, signOut} = this.props

        if (!userEmail) {
            return <Redirect to='/'/>
        }

        return (
            <div className='topbarContainer'>
                <div className='userInfo'>
                    <i className="fas fa-user"></i>
                    <span>{userEmail}</span>
                </div>
                <div className='userActions'>
                    <button><i className="far fa-bell"></i></button>
                    <button onClick={signOut}><i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userEmail: state.firebase.auth.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)