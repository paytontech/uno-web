var settings = {
    aiPlayers: "4",
    gameMode: "normal"
}
localStorage.setItem("aisettings", JSON.stringify(settings));
var settingsStore = localStorage.getItem("aisettings")
var slider = document.getElementById("playerCount");
var playerText = document.getElementById("sliderAmount")
function onLaunch() {
    slider.value = String(JSON.parse(localStorage.getItem("aisettings")).aiPlayers);
    console.log(JSON.parse(localStorage.getItem("aisettings")).aiPlayers)
    playerText.innerHTML = slider.value + " players";
    settings = JSON.parse(localStorage.getItem("aisettings"));
}
function updateSlider(val) {
    playerText.innerHTML = val + " players";
    settings.aiPlayers = val;
    localStorage.setItem("aisettings", JSON.stringify(settings));
}
