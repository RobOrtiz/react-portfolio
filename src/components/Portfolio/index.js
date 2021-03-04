import React, { Component } from 'react';
import './style.css'

class Portfolio extends Component {
    render() {
    return (
<div>
    <div className="jumbotron bg-transparent" id="portfolio">
        <h4 className="display-5">PORTFOLIO</h4>
        <hr className="my-2"></hr>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <img src="https://i.ibb.co/190HvNh/Up-Next.png" className="bd-placeholder-img card-img-top" width="100%" height="100%"></img>
                <div className="card-body">
                    <h5>UP NEXT</h5>
                    <ul className="card-text">
                    <li>Summary: An app to locate local shows.</li>
                    <li>Role: Front end designer</li>
                    <li>Tools: HTML, CSS, Materialize, Illustrator, Photoshop
                    </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                    <a href="https://ducktrshessami.github.io/up-next/">Up Next: Deployment</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <img src="https://i.ibb.co/SdQDqF7/weather.png" className="bd-placeholder-img card-img-top" width="100%" height="100%"></img>
                <div className="card-body">
                    <h5>WEATHER DASHBOARD</h5>
                    <ul className="card-text">
                    <li>Summary: Displays weather in cities.</li>
                    <li>Role: Sole Author</li>
                    <li>Tools: HTML, CSS, Javascript, JQuery, API, Bootstrap</li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                    <a href="https://robortiz.github.io/weather/">Weather: Deployment</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <img src="https://i.ibb.co/brbtNNc/Strive-Rite.png" className="bd-placeholder-img card-img-top" width="100%" height="100%"></img>
                <div className="card-body">
                    <h5>STRIVE RITE</h5>
                    <ul className="card-text">
                    <li>Summary: Task Chart for Children</li>
                    <li>Role: Front End Designer</li>
                    <li>Tools: HTML, CSS, Javascript, Bootstrap, API</li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                    <a href="https://striverite.herokuapp.com/">Strive Rite: Deployment</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div> 
</div>
        );
    }
}

export default Portfolio;