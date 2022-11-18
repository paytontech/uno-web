import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const app = createApp({
    data() {
      return {
        message: "fdfdsfsd"
      }
    },
    methods() {
        return {
            test() {
                console.log("test")
            }
        }
    }
  })


//below are some of the functions that i could salvage/reuse from the original thing with minimal changes (mostly everything except for render/draw cards):
//cards:
var cards = {
    red: [],
    green: [],
    blue: [],
    yellow: [],
    special: []
}

function genCards() {
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

var gameData = {
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
}
app.mount('#app')