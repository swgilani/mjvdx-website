import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/LandscapeP'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import './Landscapes.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'


class Landscapes extends Component {
  
    

  

    render() {







      
    
      return (

        <div className="backgroundLandscapes">

<Parallax />
<Toolbar/>
<br/>

<PhotosGrid/>
<br/>
<ContactForm/>
<Footer/>
        </div>
      )
    }
  }


  export default Landscapes