//setting up the DOM? Not sure why they do it like this??
document.addEventListener('DOMContentLoaded', () => {
    //card options array with each card an object
    const cardArray = [
        {
            name: 'beePassion',
            img: 'images/200px-4.jpg'
        },
        {
            name: 'beePassion',
            img: 'images/200px-4.jpg'
        },
        {
            name: 'beeFlyingTongue',
            img: 'images/200px-5.jpg'
        },
        {
            name: 'beeFlyingTongue',
            img: 'images/200px-5.jpg'
        },
        {
            name: 'hopper',
            img: 'images/200px-3.jpg'
        },
        {
            name: 'hopper',
            img: 'images/200px-3.jpg'
        },
        {
            name: 'spider',
            img: 'images/200px-6.jpg'
        },
        {
            name: 'spider',
            img: 'images/200px-6.jpg'
        },
        {
            name: 'hopperDark',
            img: 'images/200px-2.jpg'
        },
        {
            name: 'hopperDark',
            img: 'images/200px-2.jpg'
        },
        {
            name: 'Cutie',
            img: 'images/Cutie200px.jpg'
        },
        {
            name: 'Cutie',
            img: 'images/Cutie200px.jpg'
        },
        {
            name: 'CutieCloseUp',
            img: 'images/CutieCloseUp200px.jpg'
        },
        {
            name: 'CutieCloseUp',
            img: 'images/CutieCloseUp200px.jpg'
        },
        {
            name: 'FritButterChillin',
            img: 'images/200px-8.jpg'
        },
        {
            name: 'FritButterChillin',
            img: 'images/200px-8.jpg'
        },
        {
            name: 'FritButterfly',
            img: 'images/200px-7.jpg'
        },
        {
            name: 'FritButterfly',
            img: 'images/200px-7.jpg'
        }
    ]
    //
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    // cards chosen
    let cardsChosen = []
    // Array of cards chosen with an id number 0-27, this is used to make sure the compared cards do not have matching IDs
    let cardsChosenId = []
    //Array of matching pairs have to have same path but different id numbers
    let cardsWon = []
    //create the game board. 1 . for-loop for each card. 
    // 2.create the img element for each card, giving it name 'card'.
    // 3. set attribute to link it to the blank, set both it's name/local and an data-id name 1-end of array.
    // 4. add event listener have been clicked on and invoke a flip card function. 
    //flip the card
    function createBoard() {
        //Loop through card array
        for (let i = 0; i < cardArray.length; i++) {
            //Creat an image element named card of EACH object in array.
           let card = document.createElement('img') // changed from var to let
            //Set EACH card to it's src attribute (Images Relative Path) AND to the green card (virtual back side). Why are they set together and the ID is set separately?
            card.setAttribute('src', 'images/greenCard200px.jpg')
            // Set EACH card to a data idea #0-27 using the i iterator
            card.setAttribute('data-id', i)
            //append the card to the grid. Putting after creating card did nothing
            grid.appendChild(card)
            //turning card event
            card.addEventListener('click', flipCard)
        }
    }
    function flipCard() {
        //set cardID to get this card's data ID attribute when card flipped
        let cardId = this.getAttribute('data-id')
        //Push img card attribute to cardsChosen. This seems to be for both comparison and setTimeOut timer.
        cardsChosen.push(cardArray[cardId].img)
        //Push the id attributed card to cardsChosenId ARRAY
        cardsChosenId.push(cardId)
        //Maybe this is where it's setting the card src and img, but could this be what's bugging it out? Can it be written better
        this.setAttribute('src', cardArray[cardId].img)
        // if cardsChosen Array has 2 cards in it, check it for 1000 milliseconds
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 600)
            console.log(this)
        }
        // if{cardChosen lives in cardsWon array, leave black or removed}
    }
    //CHECK FOR MATCHES within FLIPCARD if-statement."are there two cards to compare?"
    function checkForMatch() {
        //New variable to select all images created in the DOM. Note PLURAL cards is not card variable (above)
        let cards = document.querySelectorAll('img')
        //New variables to set cards compared to green or black. Not to compare but only used to change their attributes below.
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        //cardsChosen 0 and 1 are used to compare images being same and id's being different
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {  
            // TRY THIS if{ cardsChose[0]or cardsChosen[1] is already black PASS}
            cards[optionOneId].setAttribute('src', 'images/Black200px.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Black200px.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/greenCard200px.jpg')
            cards[optionTwoId].setAttribute('src', 'images/greenCard200px.jpg')

        }
        //resets array so cards flip back to greenBack.jpg or black.jpg
        cardsChosen = []
        cardsChosenId = []
        //adding one each time to the score board for each matched pair which equals one nested array within cardsWon array. TRY THIS: If I end up removing cardsWon array, make sure to return it to a sum so this works. Perhaps the return value of pop()
        resultDisplay.textContent = cardsWon.length
        //cardsWon length is half of CardArray length because 2 cards are make one nested array so need to divide the cardArray.
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "WON'n'DONE"
        }
    }

    createBoard()
    
})