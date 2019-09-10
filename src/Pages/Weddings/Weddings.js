import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import Cards from '../../components/Cards/Cards'
import Parallax from '../../components/Parallax/WeddingsP'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import ScrollUp from '../../components/Scrollup/Scrollup'

import './Weddings.css';









class MainPage extends Component {
  state = {
    sideDrawerOpen: false,
  }


  componentDidMount(){
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
        <ScrollUp/>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

      <br/>
      
    
      


      <br/>

      <Cards/>

     

    
      <PhotosGrid />
      

      <br/>
      <ContactForm id='main-contact-form' className='contact-form' name='contact-form' method='post' action='' />
      <Footer />

      </div>
      
    )
  }
}

export default MainPage