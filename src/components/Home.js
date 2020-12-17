import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                  <div className="hero-container" data-aos="fade-in">
                    <h1>Fauzan</h1>
                    <p>I'm Web Developer<span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                  </div>
                </section>
            </div>
        );
    }
}

export default Home;