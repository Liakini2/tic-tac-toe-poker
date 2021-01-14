
const idInput = document.getElementById("idInput")
const colorInput = document.getElementById("colorInput")

const setCard = () =>{
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}

const reset = () =>{
    document.getElementById("diamonds").style.color = 'grey'
    document.getElementById("hearts").style.color = 'grey'
    document.getElementById("spades").style.color = 'grey'
    document.getElementById("clubs").style.color = 'grey'
    //let cards = document.getElementsByTag("section")
    //for(i =0; i <cards.length; i++){
    //cards[i].style.color = 'grey'   
    //}
}