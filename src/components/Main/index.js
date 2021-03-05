import React, { Component } from 'react';
import './style.css'

class Main extends Component {
    render() {
    return (
        <div>
            <div className="row">
                <div className="card bg-transparent" id="intro-card">
                <div className="col-sm-4">
                    <h1 className="display-3 welcome text-white">Welcome!</h1>
                    <h1 className="text-white" id="intro">Let me introduce you to Mr. Robert Ortiz. Former professional football player turned DJ, and now WEB DEVELOPER.</h1>
                </div>
                </div>
            </div>
            
                <div className="card bg-transparent float-right" id="info-card">
                <div className="col-sm-12">
                <h2 className="email text-white">Email: MrRobOrtiz@gmail.com</h2>
                <h2 className="phone text-white">(619) 414-2045</h2>
                <a className="btn btn-primary btn-lg float-right" href="https://drive.google.com/file/d/1MghhLfwtNUaMA7bYhHFSChsvJ8LluEbh/view" role="button">Resume</a>
                </div>
                </div>
         </div>
        );
    }
}

export default Main;
