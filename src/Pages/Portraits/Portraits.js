import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/PortraitsP'
import PhotosGrid from '../../components/PhotosGrid/PortraitGrid'
import './Portraits.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import Backdrop from '../../components/Backdrop/Backdrop'
import ReactDOM from 'react-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer'


class Portraits extends Component {
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

        <div className="backgroundPortraits">

<Parallax />
<Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
                   <SideDrawer show={this.state.sideDrawerOpen} />
                   {backdrop}
<br/>

<PhotosGrid/>
<br/>
<ContactForm/>
<Footer/>
        </div>
      )
    }
  }


  export default Portraits