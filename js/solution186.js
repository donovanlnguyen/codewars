// You get any card as an argument. Your task is to return the suit of 
// this card (in lowercase).

function defineSuit(card) {
    if(card.includes('♣') === true){
       return 'clubs'
    }else if(card.includes('♦') === true){
      return 'diamonds'
    }else if(card.includes('♥') === true){
      return 'hearts'
    }else
      return 'spades'
  }

//   function defineSuit(card) {
//     const s = {
//       "♣": "clubs",
//       "♠": "spades",
//       "♦": "diamonds",
//       "♥": "hearts"
//     }
//     return s[card.charAt(card.length - 1)]
//   }