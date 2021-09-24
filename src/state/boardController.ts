//Function shuffles array.
function shuffle(array: number[]):number[] {
  var currentIndex:number = array.length,  randomIndex:number;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
//Helper function for generateBoard function to determine if respective row and column are valid inputs.
function isValid(board:(number|null)[][], row:number, col:number, k:number) {
  //Determine if the current value k exists with in the respective positions:
    //row
    //column
    //sub-box
  //If it does, the entry is not valid.
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
  }
  return true;
}
//Function to generate game board.
function generateBoard(data:(number|null)[][]):(number|null)[][] {
  //Iterate through each row of board.
  for (let i = 0; i < 9; i++) {
    //Iterate through column of respective row.
    for (let j = 0; j < 9; j++) {
      //If current value needs an entry.
      if (data[i][j] === null) {
        //Iterate through possible values.
        for (let k = 1; k <= 9; k++) {
          //Determine if current value if valid for the board
          //at the current position.
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            //If the value is valid, recurse with the given value
            //entered on the board.
            if (!generateBoard(data).some(row => row.includes(null))) {
              return generateBoard(data);
            //If false is returned, iterate to the next value.
            } else {
              data[i][j] = null;
            }
          }
        }
        return data;
      }
    }
  }
  return data;
}
//Function determines if the current game board is valid.
function isValidSudoku(board:(number|null)[][]):boolean {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row !== null) {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col !== null) {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box !== null) {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};

//Function determines if the current game board is solvable.
function isSolvable(data:(number|null)[][]):boolean {
  //Iterate through each row of board.
  for (let i = 0; i < 9; i++) {
    //Iterate through column of respective row.
    for (let j = 0; j < 9; j++) {
      //If current value needs an entry.
      if (data[i][j] == null) {
        //Iterate through possible values.
        for (let k = 1; k <= 9; k++) {
          //Determine if current value if valid for the board
          //at the current position.
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            //If the value is valid, recurse with the given value
            //entered on the board.
            if (isSolvable(data)) {
              return true;
            //If false is returned, iterate to the next value.
            } else {
              data[i][j] = null;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
//Function initializes game board based on difficulty input.
function initBoard(curBoard: (number|null)[][], difficulty:number):(number|null)[][]{
  let blank:number = Math.floor(37 * Math.random());
  switch(difficulty){
    //Easy selection.
    case 0:
      //Board should be initialized with (37, 46) non-null values.
      blank = 81 - (37 + Math.floor(10 * Math.random()));
      break;
    //Medium selection.
    case 1:
      //Board should be initialized with (27, 36) non-null values.
      blank = 81 - (27 + Math.floor(10 * Math.random()));
      break;
    //Hard selection.
    case 2:
      //Board should be initialized with (19, 26) non-null values.
      blank = 81 - (19 + Math.floor(7 * Math.random()));
      break;
    //Extreme selection.
    case 3:
      //Board should be initialized with 18 non-null values.
      blank = 63;
      break;
  }
  //Remove amount respective of difficulty selection from the generated game board.
  for(let i = 0; i < blank; i++){
    let row:number = Math.floor(9*Math.random());
    let col:number = Math.floor(9*Math.random());
    while(!curBoard[row][col]) row = Math.floor(9*Math.random()),col = Math.floor(9*Math.random());
    const clonedBoard = curBoard.map(arr => [...arr])
    curBoard[row][col] = null;
  }
  return curBoard;
}
//Function determines if the board has been solved.
function isCompleted(board:(number|null)[][]):boolean{
  for(let i = 0; i < board.length; i++){
    if(board[i].includes(null)) return false;
  }
  return true;
}

module.exports = {
  shuffle,
  isValid,
  generateBoard,
  isValidSudoku,
  isSolvable,
  initBoard,
  isCompleted
}