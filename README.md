# memoryGame

## Description

Here is the link to my memory game: https://jaimemitchell.github.io/memory/

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