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
    reversed: false
}

function playCard(playerId, cardIndex) {
    var card = gameData.players[playerId].cards[cardIndex]
    if (gameData.stack.current.color == card.color || gameData.stack.current.number == card.number) {
        //play card
        gameData.stack.prev.push(gameData.stack.current)
        gameData.stack.current = card
        gameData.players[playerId].cards.splice(cardIndex, 1)
        drawCards()
        if (!gameData.reversed) {
            gameData.currentPlayer+=1
        } else {
            gameData.currentPlayer-=1
        }
    } else {
        document.getElementById('error').className = 'visible'
        setTimeout(() => {
            document.getElementById('error').className = 'hidden'
        }, 3000)
    }
}

function renderCards() {
    
    for (let i = 0; i < gameData.players[0].cards.length; i++) {
        var button = document.createElement('button')
        button.className = 'card'
        button.id = i
        button.innerHTML = `<p>${gameData.players[0].cards[i].color}<br>${gameData.players[0].cards[i].number}</p>`
        document.body.append(button)
        
    } 
    for (let z = 0; z < gameData.players[0].cards.length;z++) {
        let button = document.getElementById(z)
        button.addEventListener('click', () => {
            playCard(0, z)
        })
    }
    var currentCardText = document.createElement("button")
    currentCardText.className = 'current'
    currentCardText.id = 'current'
    currentCardText.innerHTML = `<p>${gameData.stack.current.color}<br>${gameData.stack.current.number}`
    currentCardText.disabled = true
    document.body.append(currentCardText)
    var cardCountText= document.createElement('p')
    cardCountText.innerHTML = `${gameData.players[0].cards.length} card(s)`
    cardCountText.id = 'cardCount'
    document.body.append(cardCountText)
}
function drawCards() {
   
    const cardsDOM = document.querySelectorAll(".card")
    if (cardsDOM != 0) {
        if (document.getElementById('current')) {
            document.getElementById('current').remove()
            document.getElementById('cardCount').remove()
        }
        cardsDOM.forEach(card => {
            card.remove()
        })
    }
    renderCards()
}

function distCards(playerCount) {
    var cardColorRand = Math.floor(Math.random() * 4)
    var cardNumberRand = Math.floor(Math.random() * 10)
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
    
    drawCards()
}

function grabCard(playerId) {
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
            drawCards()
}

