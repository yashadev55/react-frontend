import React, { Component } from "react";
import './home.css'
import Navbar from "../layout/navbar/navbar";
import Topbar from "../layout/topbar/topbar";

class Home extends Component{
    render() {
        return (
            <div>
                <Topbar/>
                <div className='homeContainer'>
                    <div className='article1'>
                        <div className='article1Content'>
                            <div className='imgDiv'>
                                <img src="img/1st _article_pic.png" alt="article1pic"/>
                            </div>
                            <div className='article1text'>
                                <h3>Save our forest</h3>
                                <p>
                                    Forests are rapidly disappearing, all over the world, alarming many people...
                                    <a href="#">Read more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='article2'>
                        <div className='article2Content1'>
                            <h3>Switch to Bamboo Paper</h3>
                            <div className='article2imgContainer'>
                                <img className='img4' src="img/export-04.png" alt="img4"/>
                                <img className='img5' src="img/export-05.png" alt="img5"/>
                                <img className='img6' src="img/export-06.png" alt="img6"/>
                            </div>
                        </div>
                        <div className='article2Content2'>
                            <h3>Switch to Digital Books</h3>
                            <div className='article2imgContainer'>
                                <img className='img7' src="img/export-07.png" alt="img7"/>
                                <img className='img8' src="img/export-08.png" alt="img8"/>
                                <img className='img9' src="img/export-09.png" alt="img9"/>
                            </div>
                        </div>
                    </div>
                    <div className='article3'>
                        <div className='article3Content'>
                            <div className='imgDiv'>
                                <img src="https://static.wixstatic.com/media/aa3cdc_93c258c439e445129db51bf5814b659e~mv2.png/v1/fill/w_500,h_410,al_c,q_85,usm_0.66_1.00_0.01/Green_Planet2.webp" alt="article3pic"/>
                            </div>
                            <div className='article3text'>
                                <h3>Save our Planet</h3>
                                <p>
                                    Let's do something to help our planet so that it will be much better than now...
                                    <a href="#">Read more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        )
    }
}

export default Home