import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc" id='_description'>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">JOIN THE WORLD CRYPTO WHALES MEETING POINT</h2>
                        <p className="padding-t-15 home-desc">ONE OF THE BIGGEST CRYPTO AND WEB3 EVENTS IN THE WORLD.</p>
                        <Link to="#" className="btn btn-bg-white waves-effect waves-light joinNow">Join Now</Link>
                    </div>
                </div>
            </div>
            {/* <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div> */}
        </section>
  	);
  }
}
export default Descriptions;