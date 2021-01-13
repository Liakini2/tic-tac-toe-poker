let board = []

const play = (clickedId) =>{
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    
    if(playerSpan.innerText === `X` && !clickedElement.innerText){
        playerSpan.innerText = `O`
        clickedElement.innerText = `X`
        board[clickedId] = `X`
    } else if(playerSpan.innerText === `O` && !clickedElement.innerText){
        playerSpan.innerText = `X`
        clickedElement.innerText = `O`
        board[clickedId] = `O`
    }
    
    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const centerLeft = board[3]
    const centerCenter = board[4]
    const centerRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8] 

    if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert(`${topLeft} is the winner!`)
        return gameOver()
    } else if(topRight !== undefined && topRight === centerCenter && topRight === bottomLeft){
        alert(`${topRight} is the winner!`)
        return gameOver()
    } else if(topRight !== undefined && topRight === centerRight && topRight === bottomRight){
        alert(`${topRight} is the winner!`)
        return gameOver()
    } else if(topLeft !== undefined && topLeft === centerCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner!`)
        return gameOver()
    } else if(topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner!`)
        return gameOver()
    } else if(topCenter !== undefined && topCenter === centerCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner!`)
        return gameOver()
    } else if(centerLeft !==undefined && centerLeft === centerCenter && centerLeft === centerRight){
        alert(`${centerLeft} is the winner!`)
        return gameOver()
    } else if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner!`)
        return gameOver()
    } 
    let boardFull = true
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false
        }
    } 
    if(boardFull === true) {
        alert(`Cats Game!`)
        return gameOver()
    }
}   


const gameOver = () =>{
    board = []
    let gameElements = document.getElementsByTagName("td")
    for(i=0; i < gameElements.length; i++){
        gameElements[i].innerText = ""
    }
}

const btnReset = () =>{
    board = []
    let gameElements = document.getElementsByTagName("td")
    for(i=0; i < gameElements.length; i++){
        gameElements[i].innerText = ""
    }
}
