document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: "beePassion",
            img: "images/200px-4.jpg",
        },
        {
            name: "beePassion",
            img: "images/200px-4.jpg",
        },
        {
            name: "beeFlyingTongue",
            img: "images/200px-5.jpg",
        },
        {
            name: "beeFlyingTongue",
            img: "images/200px-5.jpg",
        },
        {
            name: "hopper",
            img: "images/200px-3.jpg",
        },
        {
            name: "hopper",
            img: "images/200px-3.jpg",
        },
        {
            name: "spider",
            img: "images/200px-6.jpg",
        },
        {
            name: "spider",
            img: "images/200px-6.jpg",
        },
        {
            name: "hopperDark",
            img: "images/200px-2.jpg",
        },
        {
            name: "hopperDark",
            img: "images/200px-2.jpg",
        },
        {
            name: "Cutie",
            img: "images/Cutie200px.jpg",
        },
        {
            name: "Cutie",
            img: "images/Cutie200px.jpg",
        },
        {
            name: "CutieCloseUp",
            img: "images/CutieCloseUp200px.jpg",
        },
        {
            name: "CutieCloseUp",
            img: "images/CutieCloseUp200px.jpg",
        },
        {
            name: "FritButterChillin",
            img: "images/200px-8.jpg",
        },
        {
            name: "FritButterChillin",
            img: "images/200px-8.jpg",
        },
        {
            name: "FritButterfly",
            img: "images/200px-7.jpg",
        },
        {
            name: "FritButterfly",
            img: "images/200px-7.jpg",
        },
    ];
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img"); // changed from var to let

            card.setAttribute("src", "images/greenCard200px.jpg");
            card.setAttribute("data-id", i);
            grid.appendChild(card);
            card.addEventListener("click", flipCard);
        }
    }
    function checkForMatch() {
        let cards = document.querySelectorAll("img");

        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (
            cardsChosen[0] === cardsChosen[1] &&
            cardsChosenId[0] !== cardsChosenId[1]
        ) {
            //   cards[optionOneId].setAttribute("src", "images/Black200px.jpg");
            //   cards[optionTwoId].setAttribute("src", "images/Black200px.jpg");
            cards[optionOneId].style.visibility = 'hidden'
            cards[optionTwoId].style.visibility = 'hidden'
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/greenCard200px.jpg");
            cards[optionTwoId].setAttribute("src", "images/greenCard200px.jpg");
        }
        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "WON'n'DONE";
        }
    }
    function flipCard() {
        //attach the value 'this ID attribute on the button clicked' to cardId
        let cardId = this.getAttribute("data-id");
        //Push the cardArray[dynamic index] and it's image
        cardsChosen.push(cardArray[cardId].img);
        //push 'this ID attribute on the button clicked' to cardsChosenId array
        cardsChosenId.push(cardId);
        //THIS IS THE FLIP. It's saying "Set THIS card you clicked to the image('src')
        this.setAttribute("src", cardArray[cardId].img);
        // if cardsChosen Array has 2 cards in it, check it for 1000 milliseconds
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
            console.log(this);
        }
    }
    createBoard();
    console.log(this)
});
