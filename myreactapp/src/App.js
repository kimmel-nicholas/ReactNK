import React, { Component } from 'react';
import Cards from "./Cards"
import { Jumbotron } from 'reactstrap';
import MyCarousel from './MyCarousel';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      fade1: false,
      fade2: false
    }
  }


  render(){
  let cname = "lead";
    return(
      <div>
        {/* nav above jumbo */}
        <MyCarousel />
        <Jumbotron>
          {/* implement carousel within */}
          

          <h1 className="display-3">My First React App</h1>
          <p className={cname}>This is my first attempt at it </p>
          <hr className={"my-2"} />
          <p>Playing with reactstrap</p> 
          <p className={cname}></p>

        </Jumbotron>
        
        <Cards 
        fade1 = {this.state.fade1} 
        cardOneState =  {this.cardOneState} 
        fade2 = {this.state.fade2}
        cardTwoState = {this.cardTwoState}
        />
        
      </div>
    )
  }
  cardOneState = () =>{
    this.setState ({fade1 : !this.state.fade1 })
  }
  cardTwoState = () =>{
    this.setState ({fade2 : !this.state.fade2 })
  }
}

export default App;

