import React from 'react';

// const showCase = (rSecond, mod) => {
//     switch(mod) {
//         case 0:
//             return Math.floor(rSecond / 24 * 3600);
//         case 1:
//             return Math.floor(rSecond % (24 * 3600))
//     }
// }

// const [rTime, setRTime] = useState(0);

// useEffect(() => {
//     setInterval(() => {
//         setRTime(rTime - 1);
//     }, 1000)
// })

class Services extends React.Component {

  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">About Event</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>
                <div className="row vertical-content _aboutDiv">
                    <div className="mg-t-10">
                        <div className="features-box">
                            <p className="web-desc aboutEvent">CryptoFOX is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance.
                            The edition of the CryptoFOX will take place during on July 10, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, CryptoFOX will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;