// a directive enabling js's stict mode. at run time inforces stricter parsing and herror handling. helps write cleaner code/catcherrors and bugs that might go unnoticed utherwise.
'use strict';



// WHAT IS IT SAYING? the defined variable assert's value is a function that finds a module 'assert' and then runs it.
// WHAT DOES IT DO?    this line will be use to de-bug or run tests
const assert = require('assert');

//envoking read line
// WHAT IS IT SAYING?   It is naming a variable readline using the "requireModule". 
// the require module is searching for the module 'readline' then running it. 
//WHAT DOES IT DO       
// declares a constant variable in which it's value is an interface from the readable streams (process.stdin, output: process.stdout)
const readline = require('readline');

//
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 

  // * each key is an array of Numbers:
    // * A is the far-left,
    // * B is the middle,
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens:
        // * 4 is the largest,
        // * 1 is the smallest
//key: value -note

//object of arrays
let stacks = {
  a: [4, 3, 2, 1], //if i want this [1] i have to find it in the stacks object first
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
//allows piece to move from one stack to another
const movePiece = (startStack, endStack) => {

  // Your code here
  //going to need a start and end as parameters
  /**
   * neet to know start and end place of the stone, so they should be parameters -const movePiece = (startStack, endStack) => {}
   * take piece from start stack (array) and put it on the end stack
   * .pop                                and        .push     ^ is the bucket
   * 
   */
  //must get array that is inside of the start stack
  let piece = stacks[startStack].pop();
  
  stacks[endStack].push(piece);
  
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here
  if (stacks[endStack].length === 0) {
    return true
  }
  if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1)) {
    return true
  }
  else {
    console.log("Enter valid input")
    return false

  }
    
  
  /**
   * 1. try to move a piece
   * 2. check to see if it's legal (small piece on empty stack or a larger piece)
   *     -if valid return true else return false
   *     -
   *  3. will need to know start and stop. Robin-" const isLegal = (start,stop) => {} "   
   */
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) { 
    console.log("You win!")
    return true;
  }
  else {
    return false
  }
  /**
   * a win is an array of [4, 3, 2, 1,] in either the b or the c stafck
   * if yes, return; other wise return false
   */
  

}

// When is this function called? What should it do with its argument?

const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //her's where we use all the function
  /**
   * 1. user enters a start and end stack
   * 2. check if move is legal. 
   *   2.1. if yes, call the movePiece function 
   * // if no, use console log to notify(alert) user (console.log in the terminal or some kind of notify(alert) in DOM)
   *   2.2. if no, notify(alert) the user
   * 3. check for win (call function)
   * if yes then notify(alert) the 
   */
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    checkForWin()
    
  }
}
//gets a stone and figures out where to put it
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}




/**
 * !!NOTES!!
 * I. NODE.JS MODULES = LINES TO REFERENCE WHERE MODULE CAN BE FOUND IN CODE | MODULE NAME | WHAT IT DOES |
 *  -1. (ln.#is "") |'assert' | provides a set of assertion functions that can be used for testing and debugging purposes. 
 *  -2. (ln.#is "") | 'require' | is used to load modules.
 *      -2.ex1: require('assert') searches for / loads the 'assert' module
 *  -3.  (ln.#is "") | 'readline' | provides an interface for reading data from a readable stream (referencing "process.stdin", process.stdout)
 * II. METHODS
 *   -1. (ln.#is "") | .createInterface() | takes two parameters - the input stream and output stream - to create a readline interface. 
 */




/**
 * !!INSTRUCTIONS!!
 * 1. work through the logic of the game
/**
 * !!TO-DO!!
 * 1. ANNOTATE CODE LINE BY LINE
 *  - 1.1. figure out what is this line doing exactly. (ln.1)
 *  -1.2. 
 */



/**
 * !!QUESTIONS!! ||||||| !!ANSWER!!
 * Q1: What exactly is this doing? ||||||| (ln.1) ||||||| A1: The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed
 */



/**
 * !!ASSUMTIONS!!
 */




/**
 * !!BONUS!!
 * 1. Count and display how many moves
 */