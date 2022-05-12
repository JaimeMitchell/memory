# Memory

## Link to Game
Here is the link to my memory game: https://jaimemitchell.github.io/memory/

## Instructions
Flip cards over and try to match images. When you make a match the cards are removed from the board. When all cards are gone YOU WIN!

## PsuedoCode

Since I am following a tutorial and sources on the web. I want to make sure not to totally rob myself of thinking through the problem as if I didn't have any resources and had to invent from scratch. Here are the functions I think I'll need before following tutorials:

1. Functions I think I'll need in no particular order. Just brainstorming:

  1. Flip will contain these three actions: if/else to check match, pop() or reset two cards if not. Cards may be toggle buttons?
      1. Setting the card pairs to match each other.
      2. Flip function for the visual element
   if (name == name){cardArray.name.pop()}else{turn back over} may also have to use cardArray.removeChild(img...) but since it's array, not li, I believe a forEach loop may work. 
   
      3. they disappear when they do. 
   pop(), shift() or .remove(nameOfCardPair)
   
      4. they turn back over if they don't.
   else(this i'm not sure of. right now each image is attached to another image, the cardGreen jpg, which represents the back of the card. This is about one element having two images. the function
   needs to TOGGLE I think!) 
   
 2. Game Over function has these three actions: 
   
   1. When Array is empty OUTPUT <p> YOU WIN! </p>
   
   2. Random reset function for new game. The deck has to be reset in a random way as to not repeat the last game pattern.
      Math.Round(Math.Random(cardArray.forEach()) or something to that effect. a random loop. 
   3. Make a PLAY AGAIN BUTTON to reset, so that may be another function within, since this function would need to produce the button, but the 
      reset wouldn't happen until the button was pushed, so that reset random function would be in the EventListener('click',reset)

### WireFrame
![alt text](https://github.com/JaimeMitchell/memory/blob/1bf8b6aa368c58c737c94458298bea4a25f5e392/images/brainstorming.jpg "My WireLess Frame")

## Bugs that have come up:

1. CHALLENGE: Imgs can be clicked on AFTER they are matched, so they are back in the play deck. If they are double clicked they can enter the wonCards Array WITHOUT their match, leaving one card left at the end of the came. Worse is when this happens to multiple cards leaving unmatched pairs.
SOLUTION: In the checkForMatch function, add an or-conditional making the if-statement a compound conditional checking for BOTH image source and data-id number of elements clicked. If the element has the same src path BUT different IDs then it's a match.

2. CHALLENGE: Above solution now freezes the matched cards to their images, meaning they aren't set to the black.jpg to blend into the background, AND every card after the first match freezes when clicked and doesn't turn back over. 
RUBBERDUCK: My idea is to delete the matched cards from the array completely from game play and not associate them with image src "black.jpg". This also allows me to change the background at will without having to match 28 images to it.
THINGS TRIED: 
<<<<<<< HEAD
1. THINGS TRIED: 
  1. In flipCard function I took CheckForMatch out of SetTimeout method, putting it above timer and below, but that turned one card at a time over. 
  2. Also took timer out completely and did the same thing, so the timer is necessary for two cards to flip at the same time. 
  3. In the flipCard if-statement I changed cardsChosen Array to cardsChosenId. Also bugged out after first match made, allowing me to turn cards back over after match, plus all other images freeze to screen and do not turn over after flip.
  4. I ADDED another an or-statement to also check that the cardsChosenID array has 2 card array nested in it. This helped by not allowing cards to flip from black to greenCard when clicking matching pairs, BUT now the opposite occurs when I make a match, I can flip the cards back over to greenCard.jpg if the image path does NOT match. So I switched the logic but the bug persists.
  5. I spotted an error I made. When replacing new jpgs from 300px to 200px I forgot to change the relative path from the 300px to the 200px. This has helped a bit. but problem 4 persists. However, it's not erratic with random freezes!
  6. WON'n'DONE doesn't show because now the CardsWon Array length is not equal to CardsArray length/2 since I can click the cards out of the win, unpairing the cards. Cards now freezing again. Had to remove the compound conditional chosenCard==2
  7. Changed var card to let card on line 97.
  8. Commented out changing value of cardChosen Arrays back to 0 on line 141 & 142. Broke code because the array doesn't reset itself, meaning the cards don't flip back over but remain as image.
  9. adding a line to push cardsWon to cardChosenID array. This is an attempt to prevent the flip back from black.jpg to greenCard.jpg
  
  How:  // In flip function-if{cardChosen lives in cardsWon array, leave black or removed}