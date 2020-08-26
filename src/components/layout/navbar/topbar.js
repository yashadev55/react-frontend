import React, { Component } from "react";
import './topbar.css'

class Topbar extends Component{
    render() {
        return (
            <div className='topbarContainer'>
                <div className='userInfo'>
                    <i className="fas fa-user"></i>
                    <span>user email</span>
                </div>
            </div>
        )
    }
}

export default Topbar