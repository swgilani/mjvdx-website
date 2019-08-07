import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import Carousel5 from '../../components/Carousel/Carousel'
import Introduction from '../../components/Introduction/Introduction'
import Parallax from '../../components/Parallax/Parallax'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'

import './MainPage.css';








class MainPage extends Component {
  state = {
    sideDrawerOpen: false,
  }


  componentDidMount(){
    document.body.backgroundColor = null;

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
      <div classname='MainPage'style={{height: '100%'}}>

    
     
        

       
<Carousel5 />  
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}


<br/>
      <div className="flexCenter">

       
        
        </div>
       
      <Parallax />


<br/>
<PhotosGrid />


      </div>
      
    )
  }
}

export default MainPage