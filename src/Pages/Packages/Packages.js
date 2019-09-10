import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/PackagesP'
import Image1 from '../../assets/packagesPhotos/image1.jpg';
import Image2 from '../../assets/packagesPhotos/image2.jpg';
import Image3 from '../../assets/packagesPhotos/image3.jpeg';
import Image4 from '../../assets/packagesPhotos/image4new.jpg';
import './Packages.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'


class About extends Component {
  
    

  

    render() {
    
      return (

        <div className="backgroundPackages">


          <Parallax />
          <Toolbar/>

        <div className="centerPackages">
        <p>All packages can be custom fitted to your desire. We promise to build a package to fully suit all of your needs!</p>
        <br/>
        <br/>
        <div className="packagesflex">
          <div className="pitem1">
            <img src={Image1} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Platinum ($3000)</h1>
            <ul>
              <li><p>Two photographers</p></li>
              <li><p>Three day event</p></li>
              <li><p>One 13”x19” enlarged wall portrait provided from e-shoot (to showcase at reception)</p></li>
              <li><p>Up to 20 hours of wedding coverage, religious ceremonies, décor and reception</p></li>
              <li><p>Onsite photo shoot with bride, groom, family and guests on wedding day</p></li>
              <li><p>Consulting, scheduling prep and briefing session prior to the big day!</p></li>
              <li><p>All images provided via an online link and a USB- enhanced and professionally edited</p></li>
              <li><p>One custom designed wedding photo album/storybook </p></li>
              
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>







        <div className="packagesflex">
          <div className="pitem1">
            <img src={Image2} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Gold ($2500)</h1>
            <ul>
              <li><p>One photographer</p></li>
              <li><p>Two day event</p></li>
              <li><p>Complimentary e-shoot  (max 90 minutes)</p></li>
              <li><p>One 13”x19” enlarged wall portrait provided from e-shoot (to showcase at reception)</p></li>
              <li><p>Up to 15 hours of wedding coverage, religious ceremonies, décor and receptionn</p></li>
              <li><p>Onsite photo shoot with bride, groom, family and guests on wedding day</p></li>
              <li><p>Consulting, scheduling prep and briefing session prior to the big day!</p></li>
              <li><p>All images provided via an online link and a USB- enhanced and professionally edited</p></li>
              
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

        <div className="packagesflex">
          <div className="pitem1">
            <img src={Image3} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Silver ($2000)</h1>
            <ul>
              <li><p>One photographers</p></li>
              <li><p>One day event</p></li>
              <li><p>Complimentary e-shoot  (max 60 minutes)</p></li>
              <li><p>Up to 12 hours of wedding coverage, religious ceremonies, décor and reception</p></li>
              <li><p>Onsite photo shoot with bride, groom, family and guests on wedding day</p></li>
              <li><p>Consulting, scheduling prep and briefing session prior to the big day!</p></li>
              <li><p>All images provided via an online link and a USB- enhanced and professionally editedn</p></li>
              
              
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

        <div className="packagesflex">
          <div className="pitem1">
            <img src={Image4} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Bronze ($1500)</h1>
            <ul>
              <li><p>One photographers</p></li>
              <li><p>One day event</p></li>
              <li><p>Up to 6 hours of wedding coverage, religious ceremonies, décor and reception</p></li>
              <li><p>Onsite photo shoot with bride, groom, family and guests on wedding day</p></li>
              <li><p>Consulting, scheduling prep and briefing session prior to the big day!</p></li>
              <li><p>All images provided via an online link and a USB- enhanced and professionally edited</p></li>
              
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>



























        





















        </div>





          <br/>
          <ContactForm/>
          <Footer/>
        </div>
      )
    }
  }


  export default About