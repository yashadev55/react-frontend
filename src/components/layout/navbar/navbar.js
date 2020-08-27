import React, { Component } from "react";
import './navbar.css'
import 'antd/dist/antd.css'
import { Menu } from "antd";
import {CompassOutlined} from "@ant-design/icons";

class Navbar extends Component{

    state = {
        current: 'explore'
    }

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {

        const { current } = this.state

        return (
            <div className='navbarContainer'>
                <Menu onClick={this.handleClick} mode='horizontal' defaultSelectedKeys={[current]}>
                    <Menu.Item style={{border: 'none'}} key="explore">
                        <i className="fas fa-compass"></i>
                        <p>Explore</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Learn">
                        <i className="fas fa-calculator"></i>
                        <p>Learn</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Sell">
                        <i className="fas fa-plus-circle"></i>
                        <p>Sell</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Activity">
                        <i className="fas fa-bell"></i>
                        <p>Activity</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Profile">
                        <i className="fas fa-user"></i>
                        <p>Profile</p>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar