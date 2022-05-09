//setting up the DOM? Not sure why they do it like this??
document.addEventListener('DOMContentLoaded', () => {
    //card options array with each card an object
    const cardArray = [
        {
            name: 'crow',
            img: 'images/crow.jpg'
        },
        {
            name: 'crow',
            img: 'images/crow.jpg'
        },
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
            name: 'StigmaHeart',
            img: 'images/StigmaHeart.jpg'
        },
        {
            name: 'StigmaHeart',
            img: 'images/StigmaHeart.jpg'
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
// select grid
const grid = document.querySelector('.grid')
//create the game board. 1. for-loop for each card. 
// 2.create the img element for each card, giving it name 'card'.
// 3. set attribute to link it to the blank, set both it's name/local and an data-id name 1-end of array.
// 4. add event listener have been clicked on and invoke a flip card function. 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++)
    {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/cardGreen.jpg')
        card.setAttribute('data-id', i)
        // card.addEventListener('click,'flipCard)
        grid.appendChild(card)
    }
}
createBoard()
})