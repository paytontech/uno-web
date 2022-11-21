import './App.css';
import { useState, useEffect } from 'react'
var cards = {
  red: [],
  green: [],
  blue: [],
  yellow: [],
  special: []
}

var gameData = {
    players: [
        {
            bot: false,
            id: 0,
            cards: []
        }
    ],
    stack: {
        current: {
            color: "",
            number: 0
        },
        prev: [
            {/*card object*/}
        ]
        },
    currentPlayer: 0,
    reversed: false,
    finishedDealing: false,
    winner: {
        gameOver: false,
        bot: false,
        id: 0
    }
}


function App() {
  useEffect(() => {
    createCards()
    createPlayers(4)
  }, [])
  return (
    <div className="App">
      <p>{gameData.players[0].cards}</p>
      <button onClick={distCards}>dist test</button>
    </div>
  );
}


function createPlayers(botCount) {
    for (let i = 0; i < botCount; i++) {
        gameData.players.push({
            bot: true,
            id: i,
            cards: []
        })
    }
    console.log(gameData.players)
}

function distCards() {
    for (let i = 1; i < gameData.players.length; i++) {
        for (let z = 0; z < 7; i++) {
            gameData.players[i].cards.push(genCard())
        }
    }
}

function genCard() {
  //generate two random variables: a random number to determine color of card
  var possibleColors = ["green", "red", "blue", "yellow"]
  var cardColor = possibleColors[Math.floor(Math.random()*(possibleColors.length - 1))]
  //and another random number to determine the number of the card
  var cardNumberRand = Math.floor(Math.random() * 10)
  return {"color":cardColor,number:cardNumberRand}
  
}
function createCards() {
    //red
    for (let i = 0; i < 10; i++) {
        cards.red.push({
            color: "red",
            number: i
        })
        console.log(cards)
    }
    //green
    for (let i = 0; i < 10; i++) {
        cards.green.push({
            color: "green",
            number: i
        })
    }
    //blue
    for (let i = 0;i < 10; i++) {
        cards.blue.push({
            color: "blue",
            number: i
        })
    }
    //yellow
    for (let i = 0; i < 10; i++) {
        cards.yellow.push({
            color: "yellow",
            number: i
        })
    }
    
  }
export default App;
