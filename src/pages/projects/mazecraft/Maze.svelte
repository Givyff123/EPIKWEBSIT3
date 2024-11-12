<script>
    import { onMount } from 'svelte'

    import mazes from "./mazes.js"

    let ctx
    let mazeButtons
    let canvas
    const SIZE = 40
    const gameState = {
        maze: null,
        playerX: 0,
        playerY: 0,
        mazeHeight: 0
    }
    const blackSquares = [

    ]

    onMount(()=> {
        ctx = canvas.getContext("2d")
        mazeButtons = document.querySelectorAll(".maze")

        mazeButtons.forEach((button, i) => {
            button.addEventListener("click", ()=>{
                gameState.maze = mazes[i]
                gameState.playerX = 0
                gameState.playerY = 0
                drawEverything()
            })
        })

        
        gameState.maze = getRandomMaze()
        drawEverything()


        window.addEventListener("keypress", e => {
            const y = gameState.playerY
            const x = gameState.playerX

            let nextX = x
            let nextY = y

            if (e.key === "s") {
                if(y!==canvas.height-SIZE) {
                    nextY += SIZE
                }
            } else if (e.key=="w") {
                if(y!==0) {
                    nextY -= SIZE
                }
            } else if(e.key=="d") {
                if(x!==canvas.width-SIZE) {
                    nextX +=SIZE
                }
            }else if(e.key=="a") {
                if(x!==0) {
                    nextX -=SIZE
                }
            }

            if (willCollide(nextX,nextY)) {
                return
            }

            gameState.playerX=nextX
            gameState.playerY=nextY
            drawEverything()
        })
    })






function drawSquare(x, y, color, size = SIZE) {
    // console.log(x, y, color)
    ctx.beginPath()
    ctx.rect(x, y, size, size)
    ctx.fillStyle = color
    ctx.fill()
}
function drawPlayerSquare() {
    drawSquare(gameState.playerX, gameState.playerY, "red")
}




function countInString(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }
    return count;
}

function drawMaze(maze) {
   blackSquares.splice(0)
    
    let x = SIZE*5
    let y = 0
    for(let i=0; i<maze.length;i++) {
        let ch = maze[i]
        if(ch=="\n") {
            y+=SIZE
            x=SIZE*5
        }
        if(ch=="#") {
            drawSquare(x, y, "black")
            blackSquares.push({
                x: x,
                y: y
            })
            x+=SIZE
        }
        if(ch==" ") {
            drawSquare(x, y, "white")
            x+=SIZE
        }
    }
}

function getRandomMaze() {
    gameState.maze = mazes[Math.floor(Math.random()*mazes.length)]
    let newLineCount = countInString(gameState.maze, "\n");
    gameState.playerY = newLineCount*SIZE
    return gameState.maze
}

function drawRandomMaze() {
    drawMaze(getRandomMaze())
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawEverything() {
    clearCanvas()
    drawMaze(gameState.maze)
    drawPlayerSquare()
}
function willCollide(nextX, nextY) {
    for(let i=0;i<blackSquares.length;i++) {
        const sq = blackSquares[i]
        if(nextY==sq.y && nextX==sq.x) {
            return true
        }
    }
    return false
}


</script>

<canvas id="canvas" width="1000" height="1000" bind:this={canvas}>

</canvas>
<button class="maze">Maze1</button>
<button class="maze">Maze2</button>
<button class="maze">Maze3</button>
