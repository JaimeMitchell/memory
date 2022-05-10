//setting up the DOM? Not sure why they do it like this??
document.addEventListener('DOMContentLoaded', () => {
    //card options array with each card an object
    const cardArray = [
        
        {
            name: 'beeFlying',
            img: 'images/beeFlying.jpg'
        },
        {
            name: 'beeFlying',
            img: 'images/beeFlying.jpg'
        },

        {
            name: 'beePassion',
            img: 'images/beePassion.jpg'
        },
        {
            name: 'beePassion',
            img: 'images/beePassion.jpg'
        },

        {
            name: 'bwDrop',
            img: 'images/bwDrop.jpg'
        },
        {
            name: 'bwDrop',
            img: 'images/bwDrop.jpg'
        },

        {
            name: 'flower1',
            img: 'images/flower1.jpg'
        },
        {
            name: 'flower1',
            img: 'images/flower1.jpg'
        },
        {
            name: 'frit2',
            img: 'images/frit2.jpg'
        },
        {
            name: 'frit2',
            img: 'images/frit2.jpg'
        },
        {
            name: 'hopper2',
            img: 'images/hopper2.jpg'
        },
        {
            name: 'hopper2',
            img: 'images/hopper2.jpg'
        },
        {
            name: 'inverseFlower',
            img: 'images/inverseFlower.jpg'
        },
        {
            name: 'inverseFlower',
            img: 'images/inverseFlower.jpg'
        },
        {
            name: 'paradiseDew',
            img: 'images/paradiseDew.jpg'
        },
        {
            name: 'paradiseDew',
            img: 'images/paradiseDew.jpg'
        },
        {
            name: 'spider',
            img: 'images/spider.jpg'
        },
        {
            name: 'spider',
            img: 'images/spider.jpg'
        },
       
        {
            name: 'coral',
            img: 'images/coral.jpg'
        },
        {
            name: 'coral',
            img: 'images/coral.jpg'
        },
        {
            name: 'mothCutie',
            img: 'images/mothCutie.jpg'
        },
        {
            name: 'mothCutie',
            img: 'images/mothCutie.jpg'
        },
        {
            name: 'wing',
            img: 'images/wing.jpg'
        },
        {
            name: 'wing',
            img: 'images/wing.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    // select grid
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
    function flipCard() {
        //check console log and take .this out to see what happens.
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].img)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) { setTimeout(checkForMatch, 500) }
    }
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cardGreen.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("MATCH")
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', images / cardGreen.jpg)
            cards[optionTwoId].setAttribute('src', images / cardGreen.jpg)
            alert('nope')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "WON'n'DONE"
        }
    }

    createBoard()
})