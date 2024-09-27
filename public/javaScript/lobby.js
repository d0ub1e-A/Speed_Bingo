// Variable declaration

let i = 0;

let array = [0, 1, 2, 3, 4, 5, 6]

const playerInfo = [
    {
        serial: 1,
        playerName: "Player"
    },
    {
        serial: 2,
        playerName: "Player"
    },
    {
        serial: 3,
        playerName: "Player"
    },
    {
        serial: 4,
        playerName: "Player"
    },
    {
        serial: 5,
        playerName: "Player"
    },
    {
        serial: 6,
        playerName: "Player"
    },
    {
        serial: 7,
        playerName: "Player"
    }
]

// id & class intialization

const addPlayer = document.getElementById('add-button')
const leavePlayer = document.getElementById('leave-button')
const joinGame = document.getElementById('join-button')
const playerList = document.querySelector('.player-list')

// Declaring Actions

addPlayer.addEventListener("click", playerAdder)
leavePlayer.addEventListener("click", playerTerminator)
joinGame.addEventListener("click", goToGame)

//All Functions

function playerAdder() {
    if(array.length > 0) {
        array.sort()
        const HTMLString = `<p id="player-serial${playerInfo[array[0]].serial}">${playerInfo[array[0]].serial}. ${playerInfo[array[0]].playerName} ${playerInfo[array[0]].serial}</p>`
        playerList.insertAdjacentHTML("beforeend", HTMLString)
        array.shift()
    }
}
function playerTerminator() {
    if(array.length < 7) {
        let randomNumber = Math.floor(Math.random() * 7) + 1
        const toBeRemoved = document.getElementById(`player-serial${randomNumber}`)
        toBeRemoved.remove()
        array.unshift(randomNumber - 1)
        console.log(array)
    }
}
function goToGame() {
    window.open("game.html", "_blank")
}