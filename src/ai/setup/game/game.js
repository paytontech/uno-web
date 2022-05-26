var availableCards = {
    red: ["red0", "red1", "red2", "red3", "red4", "red5", "red6", "red7", "red8", "red9", "redSkip", "redReverse", "red+2"],
    blue: ["blue0", "blue1", "blue2", "blue3", "blue4", "blue5", "blue6", "blue7", "blue8", "blue9", "blueSkip", "blueReverse","blue+2"],
    green: ["green0", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9", "greenSkip", "greenReverse", "green+2"],
    yellow: ["yellow0", "yellow1", "yellow2", "yellow3", "yellow4", "yellow5", "yellow6", "yellow7", "yellow8", "yellow9", "yellowSkip", "yellowReverse", "yellow+2"],
    wild: ["normal", "+4"]
}

var playerCards = []

function startGame() {
    console.log("Starting game...")
    for (var i = 0; i < 7; i++) {
        console.log("for loop")
        var cardColorIndex = Math.random(0, 5)
        var cardColor = availableCards[cardColorIndex]
        console.log(cardColor)
        if (cardColor != "wild") {
            var cardIndex = Math.random(0, 11)
        }
        if (cardColor == "wild") {
            var cardIndex = Math.random(0, 1)
        }
        console.log(playerCards)
        document.getElementById("debugTest").innerHTML = playerCards
    }
}
