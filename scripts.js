/* What I need to do:
1. create the game board. 1 . for-loop for each card. 
2.create the img element for each card, giving it name 'card'.
3. set attribute to link it to the blank, set both it's name/local and an data-id name 1-end of array.
4. add event listener have been clicked on and invoke a flip card function. 
    flip the card*/

//still not sure what this does.
document.addEventListener('DOMContentLoaded', () => {

    //card options array with each card an object, note the curly brackets
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
    //1. Random card layout on each replay. 
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    //2. cards chosen array will have 2 cards pushed to it if their images match
    let cardsChosen = []

    //3. Originally just for changing attribute of matching cards to hidden, but I also used it to make sure the compared cards do not have matching IDs
    let cardsChosenId = []

    //4. Array of matching pairs have same path but different id numbers, used to keep score, and end game
    let cardsWon = []

    function createBoard() {
        //1. Loop through card array
        for (let i = 0; i < cardArray.length; i++) {

            //2. Creat an image element named card of EACH object in array.
            let card = document.createElement('img')// changed from var to let

            //3. Set EACH card to it's src attribute (Images Relative Path) AND to the green card (virtual back side). Why are they set together and the ID is set separately?
            card.setAttribute('src', 'images/MemoryBackground-11.jpg')

            //4. Set EACH card to a data idea #0-27 using the i iterator
            card.setAttribute('data-id', i)

            //5. Append the card to the grid. Putting after creating card did nothing
            grid.appendChild(card)

            //6. Turning card event
            card.addEventListener('click', flipCard)
        }
    }
    function flipCard() {

        //1.Attach the value 'this ID attribute on the button clicked' to cardId
        let cardId = this.getAttribute('data-id')

        //2.Push the cardArray[dynamic index] and it's image to CardsChosen Array
        cardsChosen.push(cardArray[cardId].img)

        //3. Push the id attributed card to cardsChosenId ARRAY
        cardsChosenId.push(cardId)

        //4. THIS IS THE FLIP. It's saying "Set THIS card you clicked to the image('src')
        this.setAttribute('src', cardArray[cardId].img)

        //5. If cardsChosen Array has 2 cards in it, check it for 1000 milliseconds
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
            console.log(this)
        }
    }

    function checkForMatch() {
         
        //1. New variable to select all images created in the DOM. Note PLURAL cards is not card variable (above)
        let cards = document.querySelectorAll('img')

        // 2. New variables to set cards. Not to compare but to hide cards when matched.
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        // 3. If flipped cards image src are equal AND if their IDs are different they match
        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {

            cards[optionOneId].style.visibility = 'hidden'
            cards[optionTwoId].style.visibility = 'hidden'
            // cards[optionOneId].setAttribute('src', 'images/Black200px.jpg')
            // cards[optionTwoId].setAttribute('src', 'images/Black200px.jpg')
            //pushes matching cardsChosen[0] and cardsChosen[1] to cardsWon Array in order to tally score
            cardsWon.push(cardsChosen)
            //TRY THIS //change cardsWon to a sum instead of array, remove child from parent so can't be turned back over, plus black background won't be required and can change backgrounds at will.

        }
        else {
            cards[optionOneId].setAttribute('src', 'images/MemoryBackground-11.jpg')
            cards[optionTwoId].setAttribute('src', 'images/MemoryBackground-11.jpg')

        }
        // if(cardsChosen[0]=== cardsChosen[0] || cardsChosen[1]===cardsChosen[1] ||cardsChosenId[0]===cardsChosenId[0] || cardsChosenId[1]===cardsChosenId[1]) {
        //     return }

        //resets array so cards flip back to greenBack.jpg or black.jpg
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        //cardsWon length is half of CardArray length because 2 cards make one nested array so need to divide the cardArray.
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "WON'n'DONE"
        }
    }
    createBoard()

})