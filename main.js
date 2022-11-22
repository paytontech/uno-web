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

function botCheckPlay() {
    if (gameData.currentPlayer > 0) {
        var bot = gameData.players[gameData.currentPlayer]
        var possibleCards = []
        var eligible = false
        for (let i = 0; i < bot.cards.length;i++) {
            if (gameData.stack.current.color == bot.cards[i].color || gameData.stack.current.number == bot.cards[i].number) {
                
                eligible = true
                possibleCards.push(i)
                console.log(`bot ${gameData.currentPlayer} has eligible card at index ${i}: ${String(gameData.players[gameData.currentPlayer].cards[i])}\nPossible Cards: ${String(possibleCards)}`)
            }
        }
        
        setTimeout(() => {
            
            if (!eligible) {
                grabCard(gameData.currentPlayer)

            } else {
                var rand = Math.floor(Math.random() * (possibleCards.length))
                console.log(`played card index ${possibleCards[rand]} - rand: ${rand}`)
                playCard(gameData.currentPlayer, possibleCards[rand])
            }
        }, 3000)
    }
}

function checkGame(playerId) {
        if (!gameData.winner.gameOver) {
            //if the player has no cards:
            if (gameData.players[playerId].cards.length == 0) {
                //set gameOver true (ends the game)
                gameData.winner.gameOver = true
                //if the playerId is greater than 0 (0 is the ID of the player)
                if (playerId > 0) {
                    //indicate that a bot won, and which bot won
                    gameData.winner.bot = true
                    gameData.winner.id = playerId
                } else {
                    //indicate that the player won
                    gameData.winner.bot = false
                    gameData.winner.id = 0
                }
                //not at all sure why this is here
            }
            //if the game is NOT reversed (reverse card coming later)
            if (!gameData.reversed) {
                //not reversed
                //move to the next player
                if (gameData.currentPlayer == (gameData.players.length - 1)) {
                    gameData.currentPlayer = 0
                } else {
                    gameData.currentPlayer+=1
                }
            } else {
                //reversed
                //move to the next player
                if (gameData.currentPlayer == 0) {
                    gameData.currentPlayer = gameData.players.length - 1
                } else {
                    gameData.currentPlayer-=1
                }
            }
        }
}


//arguably the most important function in the entire file (actually no nvm the renderCards() one is)
function playCard(playerId, cardIndex) {
    var card = gameData.players[playerId].cards[cardIndex]
    //if statement checks if the card is valid, and if the person trying to play the card is able to
    if ((gameData.stack.current.color == card.color || gameData.stack.current.number == card.number) && gameData.currentPlayer == playerId) {
        //play card
        //dont know why this prev data exists, but it may be useful in the future so it stays
        gameData.stack.prev.push(gameData.stack.current)
        //set the current card to the card played
        gameData.stack.current = card
        //remove the card from player's data
        gameData.players[playerId].cards.splice(cardIndex, 1)
        //do various stuff
        checkGame(playerId)
        //render cards
        //debugging
        console.log(`currentPlayer: ${gameData.currentPlayer}`)
        //check if it's a bot's turn
        botCheckPlay()
    } else {
        //show an error
        document.getElementById('error').className = 'visible'
        setTimeout(() => {
            document.getElementById('error').className = 'hidden'
        }, 3000)
    }
}




function distCards(playerCount) {
    //if cards have not been given out yet:
    if (!gameData.finishedDealing) {
        //generate two random variables: a random number to determine color of card
        var cardColorRand = Math.floor(Math.random() * 4)
        //and another random number to determine the number of the card
        var cardNumberRand = Math.floor(Math.random() * 10)
        //boring programming stuff
        switch (cardColorRand) {
            case 0:
                gameData.stack.current.color = 'red'
                gameData.stack.current.number = cardNumberRand
                break
            case 1:
                gameData.stack.current.color = 'green'
                gameData.stack.current.number = cardNumberRand
                break
            case 2:
                gameData.stack.current.color = 'yellow'
                gameData.stack.current.number = cardNumberRand
                break
            case 3:
                gameData.stack.current.color = 'blue'
                gameData.stack.current.number = cardNumberRand
                break
        }
        for (let i = 0; i < playerCount; i++) {
            //player is always index 0.
            if (gameData.players.length == 0) {
                gameData.players.push({
                    bot: false,
                    cards: [],
                    id: i
                })
            } else {
                gameData.players.push({
                    bot: true,
                    cards: [],
                    id: i
                })
            }
            //pretty much the same thing as above, but rather than the card chosen being put as the first card in the stack, 7 cards are given to each player
            for (let z = 0; z < 7; z++) {
                var index1 = Math.floor(Math.random() * 4)
                var cardType = Object.entries(cards)[index1]
                var cardNum = Math.floor(Math.random() * 10)
                switch (index1) {
                    case 0:
                        gameData.players[i].cards.push(cards.red[cardNum])
                        break
                    case 1:
                        gameData.players[i].cards.push(cards.green[cardNum])
                        break
                    case 2:
                        gameData.players[i].cards.push(cards.blue[cardNum])
                        break
                    case 3:
                        gameData.players[i].cards.push(cards.yellow[cardNum])
                        break
                    
                }
            }
            
            console.log(gameData.players)
        
        }
        //tell the game to start, and render the cards
        gameData.finishedDealing = true
    }
    
}

function grabCard(playerId) {
    if(gameData.finishedDealing && gameData.currentPlayer == playerId) {
        //same random card gen thing that's been used so many times so far
        var index1 = Math.floor(Math.random() * 4)
        var cardType = Object.entries(cards)[index1]
        var cardNum = Math.floor(Math.random() * 10)
        switch (index1) {
            case 0:
                gameData.players[playerId].cards.push(cards.red[cardNum])
                break
            case 1:
                gameData.players[playerId].cards.push(cards.green[cardNum])
                break
            case 2:
                gameData.players[playerId].cards.push(cards.blue[cardNum])
                break
            case 3:
                gameData.players[playerId].cards.push(cards.yellow[cardNum])
                break
            
        }
        checkGame(playerId)
        botCheckPlay()
        
    }
        
}

