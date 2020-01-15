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
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import ReactDOM from 'react-dom';

class About extends Component {
  
  state = {
    sideDrawerOpen: false,
  }


  componentDidMount(){
    ReactDOM.findDOMNode(this).scrollIntoView();
    document.body.classList.add("MainPage");

}

componentWillUnmount() {
  document.body.classList.remove("MainPage");
}

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }


  

    render() {

      let backdrop;
      if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />;
      }
  
    
      return (

        

        <div className="backgroundPackages">

          <Parallax />
      =
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
                   <SideDrawer show={this.state.sideDrawerOpen} />
                   {backdrop}


       
          

        <div className="centerPackages">

        <h1 className="headerp">WEDDING PACKAGES</h1>

        <h5 className="headerp">All packages can be custom fitted to your desire. We promise to build a package to fully suit all of your needs!</h5>



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
              <li><p>One photographer</p></li>
              <li><p>One day event</p></li>
              <li><p>Complimentary e-shoot  (max 60 minutes)</p></li>
              <li><p>Up to 12 hours of wedding coverage, religious ceremonies, décor and reception</p></li>
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
            <img src={Image4} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Bronze ($1500)</h1>
            <ul>
              <li><p>One photographer</p></li>
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


        
        

          <h1 className="headerp">PORTRAIT/COUPLE SHOOT PACKAGES</h1>
          <br/>



         <div className="packagesflex">
          <div className="pitem1">
            <img src={Image1} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Gold ($500)</h1>
            <ul>
              <li><p>3 hours of shooting time</p></li>
              <li><p>Consultation/prep before the shoot </p></li>
              <li><p>300+ images all colour corrected </p></li>
              <li><p>Online Photo Delivery within two weeks</p></li>
              <li><p>Up to 5 different outfits</p></li>
              <li><p>Two locations </p></li>
              <li><p>5 Fantasy/Surreal edits included! </p></li>
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>


          <div className="packagesflex">
          <div className="pitem1">
            <img src={Image1} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Silver ($400)</h1>
            <ul>
              <li><p>2 hours of shooting time</p></li>
              <li><p>Consultation/prep before the shoot </p></li>
              <li><p>150+ images all colour corrected </p></li>
              <li><p>Online Photo Delivery within two weeks</p></li>
              <li><p>Up to 5 different outfits</p></li>
              <li><p>One locations </p></li>
            </ul>  
          </div>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

          <div className="packagesflex">
          <div className="pitem1">
            <img src={Image1} alt="muskaan"></img>
          </div>
          <div className="pitem2">


            <div className="epercent">
            <h1 className="boldtext">Bronze ($250)</h1>
            <ul>
              <li><p>1 hours of shooting time</p></li>
              <li><p>Consultation/prep before the shoot </p></li>
              <li><p>75+ images all colour corrected </p></li>
              <li><p>Online Photo Delivery within two weeks</p></li>
              <li><p>Up to 3 different outfits</p></li>
              <li><p>One locations </p></li>
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