const app = Vue.createApp({
    data() {
        return {
            message: "Vue.js",
            cards: {
                red: [],
                green: [],
                blue: [],
                yellow: [],
                special: []
            },
            gameData: {
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
        }
    },
    created() {
        this.genCards()
    },
    methods: {
        genCards() {
            //red
            for (let i = 0; i < 10; i++) {
                this.cards.red.push({
                    color: "red",
                    number: i
                })
            }
            //green
            for (let i = 0; i < 10; i++) {
                this.cards.green.push({
                    color: "green",
                    number: i
                })
            }
            //blue
            for (let i = 0;i < 10; i++) {
                this.cards.blue.push({
                    color: "blue",
                    number: i
                })
            }
            //yellow
            for (let i = 0; i < 10; i++) {
                this.cards.yellow.push({
                    color: "yellow",
                    number: i
                })
            }
            console.log(this.cards)
            
        },
        distCards(playerCount) {
            if (!this.gameData.finishedDealing) {
                this.gameData.stack.current = this.genCard()
                for (let i = 0; i < playerCount; i++) {
                    if(this.gameData.players.length == 0) {
                        //player
                        this.gameData.players.push({
                            bot: false,
                            cards: [],
                            id: i
                        })
                    } else {
                        //bot
                        this.gameData.players.push({
                            bot: true,
                            cards: [],
                            id: i
                        })
                    }
                    for (let z = 0; z < 7; z++) {
                        this.gameData.players[i].cards.push(this.genCard())
                    }
                    console.log(this.gameData)
                }
                this.gameData.finishedDealing = true
            }
            
        },
        genCard() {
        var index1 = Math.floor(Math.random() * 4)
        var cardType = Object.entries(this.cards)[index1]
        var cardNum = Math.floor(Math.random() * 10)
        switch (index1) {
            case 0:
                return this.cards.red[cardNum]
                break
            case 1:
                return this.cards.green[cardNum]
                break
            case 2:
                return this.cards.blue[cardNum]
                break
            case 3:
                return this.cards.yellow[cardNum]
                break
            
        }
        }
    }
})



app.mount('#app')