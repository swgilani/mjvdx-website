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
                    {/*
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
                   */ }

                       

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
                   <hr/>


                    <h1 className="colorwhite">BUSINESS</h1>
                    <section className="smoothscroll">

                      <h3 className="boldp" id="C1">What does MJVDX stand for? </h3>
                <p className="colorwhite">
                My full name is Muneeb Javed. When creating my Instagram handle I wanted to do MuneebJaVeD which was taken so I added an X. Pronunced (Em-Jay-Vee-Dee-X).
                </p>

                   <h3 className="boldp" id="C1">What equipment do you use? </h3>
                <p className="colorwhite">
                I use Nikon full frame cameras which are known for their image quality and sharpness. I have backups of all photography gear, and only inspect all my equipment prior to any wedding! I provide the necessary lighting required to cover the shoot.</p>

                   <h3 className="boldp" id="C1">What is your payment schedule? </h3>
                <p className="colorwhite">
                A 30% deposit of the total investment is due to book/reserve the date. Another 30% of the total investment is needed a week prior to the wedding date. The balance is due on the wedding day or within a week after the wedding date. For portrait shoots a 50% deposit and remaining 50% is due on the day of the shoot! 
                </p>

                   <h3 className="boldp" id="C1">Can you hold my date(s)?</h3>
                <p className="colorwhite">
                I accept bookings on a first come/first serve basis. The date can only be held with a signed contract and deposit. 
                </p>

                   <h3 className="boldp" id="C1">Is the retainer deposit refundable? </h3>
                <p className="colorwhite">
                The retainer is non-refundable. This is to ensure I hold the date exclusively for you, and not take any other bookings for that date. 
                </p>

                <h3 className="boldp" id="C1">Are you willing to travel? Will you photograph our destination wedding? </h3>
                <p className="colorwhite">
                Definitely! If travelling more than 1 hour, I have a travel fee. For destination wedding please message me with more details! 
                </p>


                <h3 className="boldp" id="C1">How far in advance should we reserve our wedding date?</h3>
                <p className="colorwhite">
                I recommend reserving your wedding date as soon as you decide that I’m the right wedding photographer for you. Booking early has the benefit of providing an ease of mind that you have secured your preferred photography, meaning you have one less thing to worry about! 
                </p>

                <h3 className="boldp" id="C1">Do you work with an assistant or secondary photographer?</h3>
                <p className="colorwhite">
                I have other freelance photographers that I contract out (if necessary) per event. A secondary will generally only take raw images, and I will edit!
However, I prefer to work alone and steer couples towards this decision whenever possible. My style gives me flexibility to take a range of shots without additional support. When shooting I generally move around, never in one place for more than a minute, finding different angles. I will camp out a specific location waiting for the perfect wedding moment to complement the great light and composition that caught my eye. This translates to delivering a wide variety of unique and consistent looking photos! 
                </p>
                    </section>   


                    <hr/>


                    <h1 className="colorwhite">STYLE</h1>
                    <section className="smoothscroll">    

                    <h3 className="boldp" id="C1">What is your style of photography? </h3>
                <p className="colorwhite">
                I have a very distinctive and unique style. I love that depth of field (the bokeh/blurred background effect) in making a subject or particular item pop! I like to engage my edits with photos that give a 3-D feel! I edit to the vibe of the couples and reflect a theme that shows their personality. All my couples love the way I interact with them, and get the best candids possible- no awkwardness! I love capturing raw emotions and candid moments, from the ring exchange to the dance floor! 
<br/><br/>My goal is to capture the real emotive moments of the day-Yours, your family’s, and your friend’s. The moments will always be there to reflect back upon! 

                </p>


                  <h3 className="boldp" id="C1">Do you take group/family photos? </h3>
                <p className="colorwhite">
                Yes! It’s very important that I capture your immediate families! Please make a note of the important groups that you would like to take photos with a week prior to the wedding! 
                </p>


                  <h3 className="boldp" id="C1">Can you take photos like the other photographer named _______? </h3>
                <p className="colorwhite">
                Take your time and view my <a href="https://www.mjvdx.com/#/MainPage" style={{color:"#add8e6"}}> portfolio</a>, and <a href="https://www.instagram.com/mjvdx" style={{color:"#add8e6"}}> Instagram page</a> to see more of my recent work. If it’s not what you are looking for than I might not be the best fit for you.
                </p>


                  <h3 className="boldp" id="C1">Can we tell you a “shot list”?</h3>
                <p className="colorwhite">
                Definitely! I would love that, as it would tell me the types of shot you specifically want! Anything specific can be communicated to me! 
                </p>


                  <h3 className="boldp" id="C1">Are you open to ideas and suggestions? </h3>
                <p className="colorwhite">
                Yes! I would love to see the photos/screenshots/snippets of any cool ideas that you may have! 	
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