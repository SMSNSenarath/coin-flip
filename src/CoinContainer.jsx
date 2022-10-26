import React, { Component } from 'react';
import {choice} from "./helpers";
import Coin from './Coin';
import "./Coin.css";
import Head from "./head.png";
import Tail from "./tail.png";

class CoinContainer extends Component{
    static defaultProps = {
        coins : [
           {side: "head", imgSrc: Head},
           {side: "tail", imgSrc: Tail}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(oldState => {
            return {
                currCoin: newCoin,
                nFlips: oldState.nFlips +1,
                nHeads: oldState.nHeads + (newCoin.side === "head" ? 1 : 0),
                nTails: oldState.nTails + (newCoin.side === "tail" ? 1 : 0)
            };
        })
    }

    handleClick(e){
        this.flipCoin();
    }
    
    render(){
        return(
            <div className='CoinContainer'>
            <h2>Let's Flip a Coin!</h2>
               {this.state.currCoin && <Coin info={this.state.currCoin}/>}
             <button onClick={this.handleClick}>Flip Me!</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails </p>
            </div>
        )
    }
}

export default CoinContainer;