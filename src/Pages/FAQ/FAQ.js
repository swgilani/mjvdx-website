import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/FAQP'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import './FAQ.css'
import Backdrop from '../../components/Backdrop/Backdrop'

import SideDrawer from '../../components/SideDrawer/SideDrawer'
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

        <div className="FAQ">
                        <Parallax />
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
                   <SideDrawer show={this.state.sideDrawerOpen} />
                    <div className="centerFAQ">


                    <h1 className="colorwhite">COVERAGE</h1>
                    <h3 className="boldp">Quick Links</h3>


                    <p><a  href="#C1" >What is your pricing?</a></p>
                    <p><a href="#C2">Do you edit all of our photographs?</a></p>
                    <p><a href="#C3">Do you offer engagement sessions?</a></p>
                    <p><a href="#C4">Is there a permit required for the photo-shoot location?</a></p>
                    <p><a href="#C5">How do we get the photographs?</a></p>
                    <p><a href="#C6">How long will it take to receive the photographs?</a></p>
                    <p><a href="#C7">Do we receive the raw, unedited photos?</a></p>
                    <p><a href="#C8">How many pictures do we receive?</a></p>
                    <p><a href="#C9">Do we get to keep the digital files?</a></p>
                    <p><a href="#C10">Do you deliver every image you shoot?</a></p>
                    <p><a href="#C11">Do you come to the rehearsal?</a></p>



                        <hr/>

                <section className="smoothscroll">

                <h3 className="boldp" id="C1">What is your pricing?</h3>
                <p className="colorwhite">
                Packages are all available for viewing, in the package section.  Rates and collections can also vary based on the specific type of event and the type of coverage you are looking for. Custom collections are generally created for most clients, the packages are a starting point! Please get in touch so I can provide a custom quote.
                </p>
               



                <h3 className="boldp" id="C2">Do you edit all of our photographs?</h3>
                <p className="colorwhite">
                Yes! All images that you receive have been edited and cleaned up! Any favourites can go through additional retouching for additional add-ons! 
                </p>

                

                <h3 className="boldp" id="C3">Do you offer engagement sessions?</h3>
                <p className="colorwhite">
                Yes! A complimentary e-shoot is included in every package you choose! I will consult with you to discuss cool/unique concepts for the e-shoot that reflect YOUR personality! E-shoots are done a month prior to the wedding so you can get a print to display on the wedding day! Please contact me for more information!
                </p>

            


                <h3 className="boldp" id="C4">Is there a permit required for the photo-shoot location?</h3>
                <p className="colorwhite">
                Some locations require a permit and some don’t. Based on the location, we will help you figure out if a permit is required. The permit has to be obtained by the client, not the photographer.
                </p>


                 <h3 className="boldp" id="C5">How do we get the photographs?</h3>
                <p className="colorwhite">
                Depending on the package you choose, the delivery for the photos varies! All packages have an online gallery or drive where the pictures will be stored! You can easily download them from the online gallery. However, if you wish to have all the pictures without any compression, a USB option (mailed or delivered) is available as an add-on and included in some packages!
                </p>


                <h3 className="boldp" id="C6">How long will it take to receive the photographs?</h3>
                <p className="colorwhite">
                Depending on the size of the wedding and event, generally two to four weeks is the turnaround time for all the pictures. Speedy photography delivery is also available as an add-on! Photo albums are delivered within four weeks once the album layout and design has been approved.
                </p>

                <h3 className="boldp" id="C7">Do we receive the raw, unedited photos?</h3>
                <p className="colorwhite">
                No. The raw, unedited photos are not available. 
                </p>

                <h3 className="boldp" id="C8">How many pictures do we receive?</h3>
                <p className="colorwhite">
                The amount of pictures received vary on a number of factor. Some of these include the length of coverage, type of event etc. A typical eight hour day with a secondary photographer can range from 500+ images, but can be more or less based on the factors. 
                </p>

                <h3 className="boldp" id="C9">Do we get to keep the digital files?</h3>
                <p className="colorwhite">
                Yes! All select edited high-resolution digital files are yours to keep! Mjvdx Photography retains the copyright to the images and the right to use them for promotional purposes, competition etc. 
                </p>


                <h3 className="boldp" id="C10">Do you deliver every image you shoot?</h3>
                <p className="colorwhite">
                No. A lot of images are thoroughly selected from the hundreds (or even thousands!) of images per event. The pictures that are duplicates, out of focus, blocked by something, eyes are closed etc are removed. These picture are not available. I go through this process for you and save you time!
                </p>

                <h3 className="boldp" id="C11">Do you come to the rehearsal?</h3>
                <p className="colorwhite">
                Yes! Rehearsal dinner coverage can be an add to your package and collection! 
                </p>


        </section>
                    </div>






                        <br/>
                        <ContactForm/>
                        <Footer/>
        </div>
      )
    }
  }


  export default About