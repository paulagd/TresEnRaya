/*jshint esversion: 6 */
import React, { Component } from 'react';
import SimpleBox from './simple_box';

export default class Table extends Component {
    constructor(props) {
        super(props);
        const tableArray = []
        const panel = [0,0,0,0,0,0,0,0,0]

        for (var i = 0; i < (this.props.rows*this.props.columns); i++) {
          tableArray[i]={
            id:i,
            classBox: "",
            avaliable: true
          }
        }

        this.state = {
            table : tableArray,
            panel: panel,
            finish: false
          //  classBox : "",
          //  avaliable: true
        };
      //  console.log(this.state.table[0]);

    }

    clickHandler(id) {

        let table = this.state.table;
        let panel = this.state.panel;
        console.log(id);
        table[id].classBox = this.props.classPlayer;
      //  console.log(this.props.color);
        panel[id]=this.props.playerAct.id;
        console.log(panel);

        table[id].avaliable = false;
        this.setState({'table': table , 'panel': panel}, ...this.state);
        this.props.changeTurn();
        if(this.hasWin(this.state.panel)) {
          console.log(`PLAYER ${this.props.playerAct.id} WINS`);
          this.setState({'finish': true }, ...this.state);

        }

    }

    hasWin(panel){
      // -
      let playerId =this.props.playerAct.id;
      let bool=(panel[0] == playerId && panel[1] == playerId && panel[2]==playerId);
      bool=bool || (panel[3] == playerId && panel[4] == playerId && panel[5]==playerId);
      bool=bool || (panel[6] == playerId && panel[7] == playerId && panel[8]==playerId);
      // |
      bool=bool || (panel[0] == playerId && panel[3] == playerId && panel[6]==playerId);
      bool=bool || (panel[1] == playerId && panel[4] == playerId && panel[7]==playerId);
      bool=bool || (panel[2] == playerId && panel[5] == playerId && panel[8]==playerId);
      // \ /
      bool=bool || (panel[0] == playerId && panel[4] == playerId && panel[8]==playerId);
      bool=bool || (panel[2] == playerId && panel[4] == playerId && panel[6]==playerId);
      return bool;
    }

    render() { //fa una fila amb les columnes q volem

        if(this.state.finish){
          return <div class="alert alert-success" role="alert">PLAY HAS FINISHED! </div>;
          //<div className="javascript:alert('PLAY IS FINISHED')" />;
        }
        let count = 0;
        const columnsMaker = () => {
            let columns = [];
            for (var i = 0; i < this.props.columns; i++) {
                let t= this.state.table[count];
                columns.push(<SimpleBox compId={t.id} classBox={t.classBox} clikFather={this.clickHandler.bind(this)} avaliable={t.avaliable} />);

                  //id={count} classBox={this.state.classBox} clikFather={this.clickHandler.bind(this)} avaliable={this.state.avaliable} />);
                count += 1;
            }
            columns.push(<br />);
            return columns;
        };
        const rowsMaker = () => { //fa x files amb les columnes de dalt
            let rows = [];
            for (var i = 0; i < this.props.rows; i++) {
                rows.push(columnsMaker());
            }
            return rows;
        };

        return (
            <div className="tableBox">
                {rowsMaker()}
            </div>
        );
    }
}
