import React, { Component } from 'react';
import Cards from "./Cards"
import { Jumbotron } from 'reactstrap';
import MyCarousel from './MyCarousel';
import MyNavBar from './MyNavBar.js';
import MyMediaObject from './MyMediaObject';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// funky things were happening when trying to apply the stylesheet. The correct styles that implementing would load sometimes but not all the time
// sometimes they would load but once I refreshed they would go away
// I noticed that with the app running, if I moved the "import './App.css';" to the top then back to the bottom, it would load correctly once but then go away again once i refreshed



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      fade1: false,
      fade2: false,
      fade3: false,
      fade4: false,
      fade5: false,
      fade6: false,
    }
  }


  render(){
  let cname = "lead";
    return(
      <div>
        <MyCarousel />

        <MyNavBar />

        <Jumbotron>
          <h1 className="display-3">My First React App</h1>
          <p className={cname}>This is my first attempt at it </p>
        </Jumbotron>
        
        <Cards 
          fade1 = {this.state.fade1} 
          cardOneState =  {this.cardOneState} 
          fade2 = {this.state.fade2}
          cardTwoState = {this.cardTwoState}
          fade3 = {this.state.fade3}
          cardThreeState = {this.cardThreeState}
          fade4 = {this.state.fade4}
          cardFourState = {this.cardFourState}
          fade5 = {this.state.fade5}
          cardFiveState = {this.cardFiveState}
          fade6 = {this.state.fade6}
          cardSixState = {this.cardSixState}
        />

        <MyMediaObject/>
        
      </div>
    )
  }
  cardOneState = () =>{
    this.setState ({fade1 : !this.state.fade1 })
  }
  cardTwoState = () =>{
    this.setState ({fade2 : !this.state.fade2 })
  }
  cardThreeState = () =>{
    this.setState ({fade3 : !this.state.fade3 })
  }
  cardFourState = () =>{
    this.setState ({fade4 : !this.state.fade4 })
  }
  cardFiveState = () =>{
    this.setState ({fade5 : !this.state.fade5 })
  }
  cardSixState = () =>{
    this.setState ({fade6 : !this.state.fade6 })
  }
}

export default App;

