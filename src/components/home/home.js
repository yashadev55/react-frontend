import React, { Component } from "react";
import Topbar from "../layout/navbar/topbar";

class Home extends Component{
    render() {
        return (
            <div className='homeContainer'>
                <Topbar/>
                Home works
            </div>
        )
    }
}

export default Home