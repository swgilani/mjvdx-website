import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import Cards from '../../components/Cards/CardsEvents'
import Parallax from '../../components/Parallax/EventsP'
import PhotosGrid from '../../components/PhotosGrid/LoveTorontoGrid'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'

import ReactDOM from 'react-dom';

import './Events.css';









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
      <div>
           <Parallax/>
      
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

      <br/>
      
    <PhotosGrid/>    
      


      <br/>
      <Cards/>
      <br/>
      <br/>
      <br/>
      <br/>

      

    
   
      

      <br/>
      <ContactForm id='main-contact-form' className='contact-form' name='contact-form' method='post' action='' />
      <Footer />

      </div>
      
    )
  }
}

export default MainPage