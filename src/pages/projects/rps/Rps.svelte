<script>
let user = ""
let cpu = ""
let result = ""
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
        result = "Tie!! v0v"
    } else if (
        cpu_ch == 'rock' && user_ch == 'paper' 
        || cpu_ch == 'paper' && user_ch == 'scissors' 
        || cpu_ch == 'scissors' && user_ch == 'rock'
    ) {
        result = "You Won!! :)"
    } else {
        result = "You Lost :("
    }
}
function chooseRock() {
    user = "I choose rock"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "rock")
}
function choosePaper() {
    user = "I choose paper"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "paper")
}
function chooseScissors() {
    user = "I choose scissors"
    let cpu_ch = cpuTurn()
    getResult(cpu_ch, "scissors")
}
function random(list) {
   return list[Math.floor(Math.random()*list.length)]
}
function cpuTurn() {
    let cpu_ch = random(["rock", "paper", "scissors"])
    cpu = "The computer chose " + cpu_ch
    return cpu_ch
}


console.log(user + cpu)

// 
</script>


    <div>
        <button id="rock" on:click={chooseRock}>
            🪨
        </button>
        <button id="paper" on:click={choosePaper}>
            📄
        </button>
        <button id="scissors" on:click={chooseScissors}>
            ✂️
        </button>
    </div>
    <div id="user">
        {user}
    </div>
    <div id="cpu" >
        {cpu}
    </div>
    <div>
        {result}
    </div>


<style>
    div {
        font-size: 40px;
    }
    button {
        font-size: 100px;
    }
</style>