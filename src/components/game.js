import React, { Component } from 'react';

import SimpleBox from './simple_box';
import Table from './table';


export default class Game extends Component {
  constructor(props) {
    super(props);

    const player = [
      { id:1 , nombre: "Paula",  classPlayer: "black"},
      { id:2 , nombre: "Raul",  classPlayer: "red" }
    ]

    this.state= {
      player: player,
      turn: true //li toca al 1
    }
  }

  changeTurn(){
    if(this.state.turn){
      this.setState({'turn': false} , ...this.state);


    }else{
      this.setState({'turn': true}, ...this.state);
    }
  }



  render(){

    let color = this.state.turn ? this.state.player[0].classPlayer : this.state.player[1].classPlayer ;
    let player = this.state.turn ? this.state.player[0] : this.state.player[1] ;

    return(
      <Table rows={3} columns={3} changeTurn={this.changeTurn.bind(this)} classPlayer= {color} playerAct={player} />

    );
  }
}
