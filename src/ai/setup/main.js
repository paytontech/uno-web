var settings = {
    aiPlayers = 4,
    gameMode = "normal"
}
localStorage.setItem("aisettings", settings.json())
var settingsStore = localStorage.getItem("aisettings")
var slider = document.getElementById("playerCount");
var playerText = document.getElementById("sliderAmount")
playerText.innerHTML = slider.value
slider.oninput = function() {
    output.innerHTML = slider.value;
}

