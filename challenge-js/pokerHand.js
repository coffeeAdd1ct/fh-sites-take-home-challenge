var Solver = require("pokersolver").Hand; //https://github.com/goldfire/pokersolver

class PokerHand {
  constructor(hand_dealt) {
    //read cards dealt
    this.hand_dealt = hand_dealt;
  }

  getRank() {
    //put cards in array, solve the cards dealt
    var solved_hand = Solver.solve(this.hand_dealt.split(" "));

    //return type of hand
    return solved_hand.name;
  }
}

module.exports = PokerHand;
