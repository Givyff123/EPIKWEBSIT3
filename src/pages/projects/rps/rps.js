let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
user = document.querySelector("#user")
cpu = document.querySelector("#cpu")
result = document.querySelector("#result")
function getResult(cpu_ch, user_ch) {
    // if (cpu_ch == 'rock' && user_ch == 'paper' || cpu_ch == 'paper' && user_ch == 'scissors' || cpu_ch == 'scissors' && user_ch == 'rock') {
    //     result.innerText = "You Won!! :)"
    // }
    // if (cpu_ch == 'paper' && user_ch == 'rock' || cpu_ch == 'scissors' && user_ch == 'paper' || cpu_ch == 'rock' && user_ch == 'scissors') {
    //     result.innerText = "You Lost :("
    // }
    // if (cpu_ch == 'paper' && user_ch == 'paper' || cpu_ch == 'scissors' && user_ch == 'scissors' || cpu_ch == 'rock' && user_ch == 'rock') {
    //     result.innerText = "Tie!! v0v"
    // }

    if (cpu_ch == user_ch) {
        result.innerText = "Tie!! v0v"
    } else if (
        cpu_ch == 'rock' && user_ch == 'paper' 
        || cpu_ch == 'paper' && user_ch == 'scissors' 
        || cpu_ch == 'scissors' && user_ch == 'rock'
    ) {
        result.innerText = "You Won!! :)"
    } else {
        result.innerText = "You Lost :("
    }
}
function chooseRock() {
    user.innerText = "I choose rock"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "rock")
}
function choosePaper() {
    user.innerText = "I choose paper"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "paper")
}
function chooseScissors() {
    user.innerText = "I choose scissors"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "scissors")
}
function random(list) {
   return list[Math.floor(Math.random()*list.length)]
}
function cpuTurn() {
    let cpu_ch = random(["rock", "paper", "scissors"])
    cpu.innerText = "The computer chose " + cpu_ch
    return cpu_ch
}
rock.addEventListener("click", chooseRock)
paper.addEventListener("click", choosePaper)
scissors.addEventListener("click", chooseScissors)

console.log(user + cpu)

// 