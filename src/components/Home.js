import React, { Component } from 'react'
import water1 from './Images/water1.jpg'
import water2 from './Images/water2.jpg'
import water3 from './Images/water3.jpg'
import water4 from './Images/water4.jpg'
import water5 from './Images/water5.jpg'
import water6 from './Images/water6.jpg'
import water7 from './Images/water7.jpg'
import water8 from './Images/water8.jpg'

import ashay from './Images/Ashay.jpg'


class Home extends Component {
    render() {
        return (
           <div className="home">
                <div className="row">
                    <h3>The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul.</h3><br/>
                    <div className="col-md-8">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="myCarousel" data-slide-to="1" ></li>
                                <li data-target="myCarousel" data-slide-to="2" ></li>
                            </ol>

                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <img src={water1} alt="waterfall" />
                                    <div className="carousel-caption">
                                        <h3>Waterfall</h3>
                                        <p>Blue Planet</p>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src={water2} alt="waterfall" />
                                    <div className="carousel-caption">
                                        <h3>Water Yatch</h3>
                                        <p>Blue Planet</p>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src={water3} alt="waterfall" />
                                    <div className="carousel-caption">
                                        <h3>Ocean waves</h3>
                                        <p>Blue Planet</p>
                                    </div>
                                </div>

                            </div>

                            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="well">
                            <div className="card">
                                <h4>About</h4>
                                <p>This Web-app includes some amazing features and basic projects of React Js includes: <br/>
                                Hooks, Ajax requesting, Todo-list, Tic-tac-toe game and many more....</p>
                            </div>
                            <div className="card">
                                <h4>Best Places to visit</h4>
                                
                                <span className="label label-danger">Jog Falls, Karanatka</span> &nbsp;
                                <span className="label label-primary">Minicoy Island</span> &nbsp;
                                <span className="label label-success">Hebbe Falls</span> <br/><br/>
                                <span className="label label-warning">Dudhsagar Falls</span> &nbsp;
                                <span className="label label-primary">Auli</span> &nbsp;
                                <span className="label label-success">Kedarnath</span> &nbsp;
                                <span className="label label-danger">Konkan</span> &nbsp;
                                <span className="label label-warning">Goa</span> <br/><br/>
                                <span className="label label-danger">Dhuandhar Falls</span> &nbsp;
                                <span className="label label-success">Pondicherry</span> &nbsp;
                                <span className="label label-warning">Ladakh</span> &nbsp;
                                <span className="label label-success">ALibagh</span> <br/><br/>
                                
                            </div>
                            <a href="https://ashaytiwari.github.io/Portfolio-Website/">
                                <div className="card text-center">
                                    <h4>Visit our Portfolio</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="ocean text-center">
                    <h3>Life's at ease, with fresh ocean breeze.</h3><br/><br/>
                    <div className="row">
                        <div className="col-md-4">
                        <img src={water4} />
                           
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                            "There's nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, 
                            no matter how many times it's sent away."
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <img src={water5} />
                        </div>
                    </div>
                </div><hr/>
                </div>
            
        )
    }
}

export default Home
