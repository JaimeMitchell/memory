/* What I need to do:
1. create the game board. 1 . for-loop for each card. 
2.create the img element for each card, giving it name 'card'.
3. set attribute to link it to the blank, set both it's name/local and an data-id name 1-end of array.
4. add event listener have been clicked on and invoke a flip card function. 
    flip the card*/

//still not sure what this does.
document.addEventListener('DOMContentLoaded', () => {

    //1. Card array. Each ARRAY ITEM is an OBJECT, with name and image src. Note curly brackets
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
    
    //2. Random card layout on each replay. //can't seem to creat variable or function for this.
    cardArray.sort(() => 0.5 - Math.random())
    // cardArray.Math.round(Math.random())
    //3. select the grid div which will be the array item's Mama Bear.
    const grid = document.querySelector('.grid')

    //4. HTML span nested in h3. It's the Scoreboard and where I'll place a button. 
    const resultDisplay = document.querySelector('#result')

    //2. cards chosen array will have 2 cards pushed to it if their images match
    let cardsChosen = []

    //3. Originally just for changing attribute of matching cards to hidden, but I also used it to make sure the compared cards do not have matching IDs.
    let cardsChosenId = []

    //4. Array of matching pairs have same path but different id numbers, used to keep score, and end game
    let cardsWon = []
    createBoard()
    function createBoard() {
        //1. Loop through card array
        for (let i = 0; i < cardArray.length; i++) {

            //2. Creat an image element named card of EACH object in array.
            let card = document.createElement('img')// changed from var to let
            // card.classList.add("card");
            //3. Set EACH card to it's src attribute (Images Relative Path) AND to the green card (virtual back side). Why are they set together and the ID is set separately?
            card.setAttribute('src', 'images/leaf.jpg')

            //4. Set EACH card to a data idea #0-27 using the i iterator
            card.setAttribute('data-id', i)

            //5. Append the card to the grid. Putting after creating card did nothing
            grid.appendChild(card)

            //6. Turning card event
            card.addEventListener('click', flipCard)
        }
    }
  
    function flipCard() {

        //1.Attach the value 'get this object's ID attribute when its clicked' to cardId
        let cardId = this.getAttribute('data-id')

        //2.Push the cardArray[dynamic index] and it's image to CardsChosen Array
        cardsChosen.push(cardArray[cardId].img)

        //3. Push the object's id attribute to cardsChosenId ARRAY
        cardsChosenId.push(cardId)

        //4. THIS IS THE FLIP. It's saying "Set THIS card you clicked to the image('src')
        this.setAttribute('src', cardArray[cardId].img)
        // element.classList.toggle("card")
        //5. If cardsChosen Array has 2 cards in it, check it for 1000 milliseconds
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
            console.log(this)
        }
    }

// function player(){}
// function computer(){}

    function checkForMatch() {

        //1. New variable to select all images created in the DOM. Note PLURAL cards is not card variable (above)
        let cards = document.querySelectorAll('img')

        // 2. New variables to set cards. Originally used to hide cards when they match, BUT also needed to compare cards to make sure cards have different IDs.
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        // 3. If flipped cards image src are equal AND if their IDs are different they match!
        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            // 4a. Card pair won and are hidden from board and out of play.
            cards[optionOneId].style.visibility = 'hidden'
            cards[optionTwoId].style.visibility = 'hidden'
            //4b. BELOW code is from Original Tutorial. I wanted the cards to be hidden fix game breaking bugs and so I can change background seamlessly.
            // cards[optionOneId].setAttribute('src', 'images/Black200px.jpg')
            // cards[optionTwoId].setAttribute('src', 'images/Black200px.jpg')

            //5. pushes matching cardsChosen[0] and cardsChosen[1] to cardsWon Array in order to keep tally of cards for both score and to end the game.
            cardsWon.push(cardsChosen)

            //6. else the image flips back over to it's back side. Considered making these two different from the original back to create a more challenging memory came. The varied background makes memorizing harder.    
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/leaf.jpg')
            cards[optionTwoId].setAttribute('src', 'images/leaf.jpg')
        }
        // if(optionOneId=== optionTwoId || cardsChosenID[0]===cardsChosenID[1] {
        //     return } Should prevent double clicking one card and sending it to CardsWon array.

        //7. resets the arrays from the two cards back to empty for the next try.
        cardsChosen = []
        cardsChosenId = []

        //8. 
        resultDisplay.textContent = cardsWon.length


        //9. CardsWon length is half of CardArray length because 2 cards make one nested array so need to divide the cardArray.
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = cardsWon.length
            resultDisplay.textContent = "Set them free to play again"
            // const getButton = document.getElementById(result)
            
            // getButton.addEventListener('click',reloadPage)
            // function reloadPage(){
            //     console.log('here')
            //     location.reload();
               }
        }
    

})