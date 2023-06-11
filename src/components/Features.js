import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
  	return (
        <section className="section bg-light" id="features">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Discussion Topics</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-center font-secondary padding-t-30" id='_feature_subtitle'>Identifying the gamechanging trends in the web 3.0 ecosystem.</p>
                </div>
            </div>
        <div className="container">
            <div className="row vertical-content">
                <div className="col-lg-6">
                    <div className="features-box">
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className=""><b>WHAT WEB 3.0 MEANS FOR ENTERPRISES</b> (Sunny Lu)</li>
                            <li className=""><b>VALUE CREATION IN THE METAVERSE</b> (Gracy Chen)</li>
                            <li className=""><b>THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM</b> (Nena Dokuzov & Jean Charles Gaudechon)</li>
                            <li className=""><b>DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS</b> (Max Kordek)</li>
                            <li className=""><b>NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES</b> (Alex Zinder & Nicole Purin) </li>
                            <li className=""><b>MAXIMIZING ESG IMPACT WITH BLOCKCHAIN</b> (Helen Hai)</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="features-box">
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className=""><b>WEB 3 GAMING: THE NEW FRONTIER?</b> (Sunny Lu)</li>
                            <li className=""><b>DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS</b> (Reece Merrick)</li>
                            <li className=""><b>CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS</b> (Mohammed Alblooshi)</li>
                            <li className=""><b>WEB 3: THE FUTURE IS HERE AND NOW</b> (Sunny Lu)</li>
                            <li className=""><b>BRIDGING DEFI AND CEFI</b> (Jason Allegrante)</li>
                            <li className=""><b>INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES</b> (Dina Sam'an)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  	);
  }
}
export default Features;