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
        current: {/*card object*/},
        prev: [
            {/*card object*/}
        ]
    }
}

function playCard(playerId, cardIndex) {
    var card = gameData.players[0].cards[cardIndex]
    if (gameData.stack.current.color == card.color || gameData.stack.current.number == card.number) {
        //play card
        console.log(`playing card: ${card}`)
    } else {
        console.log(`invalid card: ${card}`)
    }
}





function distCards(playerCount) {
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
    for (i = 0; i < gameData.players[0].cards.length; i++) {
        var button = document.createElement('button')
        button.className = 'card'
        button.id = i
        button.innerHTML = `<p>${gameData.players[0].cards[i].color}<br>${gameData.players[0].cards[i].number}</p>`
        document.body.append(button)
        
    } 
    for (let i = 0; i < gameData.players[0].cards.length;i++) {
        let button = document.getElementById(i)
        button.addEventListener('click', () => {
            playCard(0, i)
        })
    }
}