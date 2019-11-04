import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Welcome.css';
import { Link } from 'react-router-dom'


class Welcome extends Component {
  
    onClick(){
        window.location.href= './MainPage'
    }

    componentDidMount(){
      ReactDOM.findDOMNode(this).scrollIntoView();
}
  

    render() {
    
      return (

        <div className = "container">

          <div id="button-container">
			     <p className="name">MJVDX</p>
           <br/>
           <br/>
           <br/>
           <h1 className="welcomeText">Welcome!</h1>
           <p className="title">Photographer based in Toronto</p>

            <Link to="/MainPage">
            <button className= "btn-contactwelcome">Enter</button>  
            </Link>
		      </div>

           
              
        </div>
      )
    }
  }

  export default Welcome