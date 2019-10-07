import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Carousel5 from '../../components/Carousel/Carousel'
import Parallax from '../../components/Parallax/Parallax'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import MediaQuery from "react-responsive";
import Backdrop from '../../components/Backdrop/Backdrop'

import SideDrawer from '../../components/SideDrawer/SideDrawer'
import './MainPage.css';
import ReactDOM from 'react-dom';









class MainPage extends Component {
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
      <div classname="MainPage" style={{height: '100%'}}>



 
        
        <MediaQuery maxDeviceWidth={650}>
        <br/> 
        <br/>   
        <br/> 
        </MediaQuery>
      
        <Carousel5 /> 
        <br/>
        <Parallax /> 
    


      <br/>
      <div className="flexCenter">

       
        
      </div>
       
 


      <br/>
    
      <PhotosGrid />
      

      <br/>
      <ContactForm id='main-contact-form' className='contact-form' name='contact-form' method='post' action='' />
      <Footer />
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
                   <SideDrawer show={this.state.sideDrawerOpen} />
                   {backdrop}
      </div>
      
    )
  }
}

export default MainPage