import React from 'react'



import MustTechNavBar from '../Components/MustTechNavBar'
import Comp1 from '../Components/Comp1'
import WhatWeDo from '../Components/WhatWeDo'
import Statistics from '../Components/Statistics'
import Services from '../Components/Services'
import Teachnologies from '../Components/Teachnologies'
import Footer from '../Components/footer'
import OurWork from '../Components/OurWork'
import ClientReviews from '../Components/clientReviews'
import Pricingbanner from '../Components/PricingTag'
import HowMustTechWork from '../Components/HowMustTechWork'
import PricingCards from '../Components/PricingCards'
import PortfolioContent from '../Components/PortfolioContent'
import Slider from '../Components/Slider'



// import WorkStationPage from '../Components/WorkStationPage';
export const Portfolio = () => {


  return (
    <div style={{overflowX:'hidden'}}>

     <MustTechNavBar/>
     <Slider/>
     <PortfolioContent/>
     
     {/* <Pricingbanner/> */}
     {/* <HowMustTechWork/> */}
     {/* <PricingCards/> */}
     {/* <Comp1/> */}
     {/* <WhatWeDo/> */}
     {/* <Statistics/> */}
     {/* <Services/> */}
     {/* <Teachnologies/> */}
     {/* <OurWork/> */}
     <ClientReviews/>
     <Footer/>
      
    </div>
  )
}
