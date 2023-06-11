import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Team from './components/Team';
import Testi from './components/Testi';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import Aux from './hoc/Aux_';
import {CountUp} from 'use-count-up';
import Particles from 'react-particles-js';
import CountdownTimer from "react-component-countdown-timer";

function HomeOne() {
    var mystyle = { position: 'absolute',marginTop: '-35%' };
    var bkg1 = {
        backgroundImage: 'url(images/wave-shape/wave1.png)',
    };
    var bkg2 = {
        backgroundImage: 'url(images/wave-shape/wave2.png)',
    };
    var bkg3 = {
        backgroundImage: 'url(images/wave-shape/wave3.png)',
    };
    var settings = {
        count: 5432,
        border: true,
        showTitle: true,
        noPoints: true,
    };
    const secondsInTheFuture = new Date("2023-06-10T18:30:00Z").getTime() / 1000;
    const secondsNow = new Date().getTime() / 1000;
    const difference = Math.round(secondsInTheFuture - secondsNow);
    return (
        <Aux>
            <Navbar />
            <div className='_countdown row' >
                <CountdownTimer count={difference} showTitle size={40} labelSize={20}/>
            </div>
            <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.png">
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row" id='_display_row'>
                                <div className="col-lg-10 offset-lg-1 text-white text-center">
                                    {/* <p className="padding-t-12 home-desc" id='_home_explan'>THE WORLD CRYPTO WHALES MEETING POINT</p> */}
                                    <h1 className="home-title" id='_homeTitle'>CRYPTOFOX DUBAI 2023</h1>
                                    <p className="padding-t-15 home-desc" id='_homeDate'>July 10, 2023 at 6:30 pm, Dubai, ATLANTIS, THE PALM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-effect wave-anim">
                    <div className="waves-shape shape-one">
                        <div className="wave wave-one" style={bkg1}></div>
                    </div>
                    <div className="waves-shape shape-two">
                        <div className="wave wave-two" style={bkg2}></div>
                    </div>
                    <div className="waves-shape shape-three">
                        <div className="wave wave-three" style={bkg3}></div>
                    </div>
                </div>
                <div className="container">
                    <div className='text-center text-white margin-t-30 div_countup'>
                        <p className="countup"><CountUp isCounting start={6000} end={8000} duration={2} />+ <br></br><span style={{marginRight: '20px'}}>Visitors</span></p>
                        <p className="countup"><CountUp  isCounting start={400} end={600} duration={1.5} />+ <br></br><span>Companies</span></p>
                        <p className="countup"><CountUp  isCounting start={10} end={60} duration={1} />+ <br></br><span>Speakers</span></p>
                        <p className="countup"><CountUp  isCounting start={10} end={40} duration={1} />+ <br></br><span>countries</span></p>
                    </div>
                </div>                     
                <Particles style={mystyle}
                    params={{
                        "particles": {
                            "number": {
                                "value": 200
                            },
                            "size": {
                                "value": 4
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} 
                />
            </section>

            <Services />
            <Descriptions />
            <Features />
            <Team />
            <Testi />
            <FooterLinks />
            {/* <Switcher /> */}
        </Aux>
    );
}

export default HomeOne;