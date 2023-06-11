import React, { Component } from 'react';
import Slider from "react-slick";

const images = [{
        id: 1,
        src: "images/speakers/1)Sunny-Lu.png",
        alt: "Image 1",
        name: "Sunny Lu",
        nick: "Vechain"
    },
    {
        id: 2,
        src: "images/speakers/2)Helen-Hai.png",
        alt: "Image 2 ",
        name: "Helen Hai",
        nick: "Binance"
    },
    {
        id: 3,
        src: "images/speakers/3)Alex-Zinder.png",
        alt: "Image 3",
        name: "Alex-Zinder",
        nick: "Ledger Enterprise"
    },
    {
        id: 4,
        src: "images/speakers/4)Gracy-Chen.png",
        alt: "Image 4",
        name: "Gracy-Chen",
        nick: "Bitget"
    },
    {
        id: 5,
        src: "images/speakers/5)Mohammed-Alblooshi.png",
        alt: "Image 5",
        name: "Mohammed Alblooshi",
        nick: "Dubai Inter-Financial Centre"
    },
    {
        id: 6,
        src: "images/speakers/6)Max-Kordek.png",
        alt: "Image 6",
        name: "Max-Kordek",
        nick: "Lisk"
    },
    {
        id: 7,
        src: "images/speakers/7)Nena-Dokuzov.png",
        alt: "Image 7",
        name: "Nena-Dokuzov",
        nick: "Alserkal Group"
    },
    {
        id: 8,
        src: "images/speakers/8)Reece-Merrick.png",
        alt: "Image 8",
        name: "Reece-Merrick",
        nick: "Ripple"
    },
    {
        id: 9,
        src: "images/speakers/9)Dina-Sam'an.png",
        alt: "Image 9",
        name: "Dina-Sam'an",
        nick: "CoinMENA"
    },
    {
        id: 10,
        src: "images/speakers/10)Jean-Charles-Gaudechon.png",
        alt: "Image 10",
        name: "Jean-Charles-Gaudechon",
        nick: "OneFootball Labs"
    },
    {
        id: 11,
        src: "images/speakers/11)Nicole-Purin.png",
        alt: "Image 11",
        name: "Nicole Purin",
        nick: "OKX"
    },
    {
        id: 12,
        src: "images/speakers/12)Jason-Allegrante.png",
        alt: "Image 12",
        name: "Jason-Allegrante",
        nick: "Fireblocks"
    }
];

class Team extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 18000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

  	return (
     <section className="section pt-4" id="team">
            <div className="container" style={{marginTop:'3%'}}>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Speakers</h1>
                        <div className="section-title-border margin-t-20"></div>
                        {/* <p className="section-subtitle text-muted text-center font-secondary padding-t-30"></p> */}
                    </div>
                </div>
                <div className="row margin-t-50">
                    <Slider {...settings}>
                        {images.map((item) => (
                            <div className="team-box text-center hover-effect" key={item.id}>
                                <div className="team-wrapper">
                                    <div className="team-member">                                    
                                        <img src={item.src}  alt={item.alt}  className="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4 className="team-name">{item.name}</h4>
                                <p className="text-uppercase team-designation">{item.nick}</p>
                            </div>    
                        ))}                    
                    </Slider>
                </div>
            </div>
        </section>
    
  	);
  }
}
export default Team;