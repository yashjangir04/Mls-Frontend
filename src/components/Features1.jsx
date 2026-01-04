import React from 'react'
import Fcard from '../components/Fcard'
import fcard1 from '../assets/images/fcard1.jpg' ;
import fcard2 from '../assets/images/fcard2.jpg' ;
import fcard3 from '../assets/images/fcard3.webp' ;
import fcard4 from '../assets/images/fcard4.jpg' ;
import fcard5 from '../assets/images/fcard5.jpg' ;
import fcard6 from '../assets/images/fcard6.jpg' ;

const Features1 = () => {
  return (
    <div className='features1 w-full min-h-80 bg-white flex flex-col items-center py-30 gap-20'>
        <div className="featdiv1 w-full flex flex-col items-center md:flex-row justify-center gap-10">
            <Fcard id={"1"} img={fcard1} heading={"YOUR CARGO OUR CONCERN"} para={"We offer a diverse range of transportation services from project cargo to international transportation and domestic retail distribution and delivery."} />
            <Fcard id={"2"} img={fcard2} heading={"100% SAFE DELIVERY"} para={"Our capacities give us the freedom of executing project of various sizes. From small personal projects to building mega build of grand scale."} />
            <Fcard id={"3"} img={fcard3} heading={"REAL-TIME TRACKING & SUPPORT"} para={"Track your shipment at every stage with real-time updates, full visibility, and dedicated support-ensuring transparency and peace of mind from pickup to delivery."} />
        </div>
        <div className="featdiv2 w-full flex flex-col items-center md:flex-row justify-center gap-10">
            <Fcard id={"4"} img={fcard4} heading={"Affordable Pricing"} para={"We offer affordable pricing for all of our logistics services, without compromising on quality or reliability. Contact us today for a quote and see how we can help you save on your logistics costs."} />
            <Fcard id={"5"} img={fcard5} heading={"Responsive Customer Support"} para={"Our responsive customer support team is available around the clock to help you with any questions or concerns you may have. We pride ourselves on providing exceptional customer service and support."} />
            <Fcard id={"6"} img={fcard6} heading={"Part Load SERVICE"} para={"We offer efficient transportation services to move your products from point A to point B. Our logistics specialists work closely with our carriers to optimize routes and minimize transportation costs."} />
        </div>
    </div>
  )
}

export default Features1