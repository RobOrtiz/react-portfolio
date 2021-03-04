import React, { Component } from 'react';
import './style.css'

class About extends Component {
    render() {
    return (
    <div>
        <div class="row" id="dividerOne"></div>
        <div class="container-fluid bg-transparent" id="bioContainer">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-lg-3 mt-5">
                        <img src="https://i.ibb.co/HYDv2RQ/NFL-collage-200x300.jpg" alt="collage of Robert in NFL" id="footballPic"></img>
                    </div>
                        <div class="col-lg-6">
                            <div class="card-body">
                                <h5 class="card-title">BIO</h5>
                                <p class="card-text overflow-scroll">From professional athlete to professional DJ, Robert Ortiz has always pursued the things he is passionate about and loves. He was born and raised in San Diego, CA. Robert attended college at San Diego State University, where he studied communication and played football. After college, he pursued his dream of playing in the National Football League, which afforded him the opportunity to play with the San Diego Chargers and New England Patriots. When his football career came to an end Robert jumped into the entertainment business as a DJ, in which he was able to perform in from of some of the worlds most lively crowds, some of Hollywood's most exclusive parties, and the night life's most popular venues across the United States. In 2019, Robert launched a new app for DJ's that allowed them to receive real time requests from party goers. This business venture lead to his appreciation and interest in learning to code.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-5">
                            <img src="https://i.ibb.co/pj6L0w0/DJ-bio-pic-200x300.jpg" alt="DJ Mister-E Djing" id="djPic"></img>
                        </div>
                </div>            
            </div>
                <div class="row" id="dividerTwo"></div>
        </div>
    </div>
        );
    }
}

export default About;
