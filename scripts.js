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

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
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
            var card = document.createElement('img')
            //Set EACH card to it's src attribute (Images Relative Path) AND to the green card (virtual back side)
            card.setAttribute('src', 'images/greenCard.jpg')
            // Set EACH card to a data idea #0-27 using the i iterator
            card.setAttribute('data-id', i)
            //append the card to the grid. Putting after creating card did nothing
            grid.appendChild(card)
            card.addEventListener('click', flipCard)
        }
    }
    function flipCard() {
        console.log(this)
        //check console log and take .this out to see what happens.
        //set cardID to a data ID of #0-27
        let cardId = this.getAttribute('data-id')
        console.log(cardId)
        cardsChosen.push(cardArray[cardId].img)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
            console.log(this)
        }
    }
    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'images/Black200px.jpg')
            cards[optionTwoId].setAttribute('src', 'images/Black200px.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/greenCard200px.jpg')
            cards[optionTwoId].setAttribute('src', 'images/greenCard200px.jpg')

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "WON'n'DONE"
        }
    }

    createBoard()
    cardArray.sort(() => 0.5 - Math.random())
})