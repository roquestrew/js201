// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'


function rockPaperScissors (p1, p2) {

    let throws = ['paper', 'rock', 'scissors'];

    const winner = [
        ['draw', 'player 1', 'player 2'],
        ['player 2', 'draw', 'player 1'],
        ['player 1', 'player 2', 'draw'],
    ];

     return winner[throws.indexOf(p1)][throws.indexOf(p2)]

}

//           P2: PAPER ROCK  SCISSORS
// P1: PAPER     DRAW  P1    P2
// P1: ROCK      P2    DRAW  P1
// P1: SCISSORS  P1    P2    DRAW

