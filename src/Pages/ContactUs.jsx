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
import ContactUsBanner from '../Components/ContactUsTag'
import LocationMustTech from '../Components/LocationMustTech'
import BookMeeting from '../Components/BookMeeting'
import GetInTouch from '../Components/GetInTouch'


// import WorkStationPage from '../Components/WorkStationPage';
export const ContactUs = () => {
  return (
    <div style={{overflowX:'hidden'}}>

     <MustTechNavBar/>
     <ContactUsBanner/>
     <LocationMustTech/>
     <BookMeeting/>
     <GetInTouch/>
     
     <Footer/>
      
    </div>
  )
}
