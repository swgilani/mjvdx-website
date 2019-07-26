import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import Image1 from '../../assets/images/welcome_page_pic.jpg';
import Image2 from '../../assets/images/saima_.jpg';
import Image3 from '../../assets/images/saima_-2.jpg';
import Image4 from '../../assets/images/saima_-3.jpg';
import Image5 from '../../assets/images/saima_-4.jpg';
import Image6 from '../../assets/images/saima_-5.jpg';
import Flickity from 'react-flickity-component';
import FlickityImgLoaded from 'flickity-imagesloaded';
import './MainPage.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});




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

<Flickity
      options={{wrapAround: true,  pageDots: false, imagesLoaded: true,prevNextButtons: false,groupCells: true, selectedAttraction: 0.01,
        friction: 0.15, autoPlay: true }}>
      <img className="sizeImg" src={Image1}/>
      <img className="sizeImg" src={Image2}/>
      <img className="sizeImg" src={Image3}/>
      <img className="sizeImg" src={Image4}/>
      <img className="sizeImg" src={Image5}/>
      <img className="sizeImg" src={Image6}/>
    </Flickity>    

<br/>

<div className="cardalign">
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="media"
          image={Image4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weddings
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           something something something very important something something
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>yurp</p>









        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>
    )
  }
}

export default MainPage