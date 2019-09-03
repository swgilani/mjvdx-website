import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/PortraitsP'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import './Portraits.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'


class Portraits extends Component {
  
    

  

    render() {
    
      return (

        <div className="backgroundPortraits">

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


  export default Portraits