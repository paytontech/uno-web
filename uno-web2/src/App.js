import './App.css';
import { useState, useEffect } from 'react'
var cards = {
  red: [],
  green: [],
  blue: [],
  yellow: [],
  special: []
}


function App() {
  const [gameData, setGameData] = useState({
    players: [],
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
})
  useEffect(() => {
    createCards()
  })
  return (
    <div className="App">
      
    </div>
  );
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

function distCards() {
  
}

function genCard() {
  //generate two random variables: a random number to determine color of card
  var cardColorRand = Math.floor(Math.random() * 4)
  //and another random number to determine the number of the card
  var cardNumberRand = Math.floor(Math.random() * 10)
  //boring programming stuff
  switch (cardColorRand) {
      case 0:
          return {"color":"red",number:cardNumberRand}
          break
      case 1:
          return {"color":"green",number:cardNumberRand}
          break
      case 2:
          return {"color":"yellow",number:cardNumberRand}
          break
      case 3:
          return {"color":"blue",number:cardNumberRand}
          break
      default:
        break
  }
}
export default App;
