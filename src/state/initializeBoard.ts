function shuffle(array: number[]):number[] {
  var currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

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

export function isValidSudoku(board:(number|null)[][]):boolean {
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

export function isSolvable(data:(number|null)[][]):boolean {
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

var initBoard = (curBoard: (number|null)[][], difficulty:number):(number|null)[][] =>{
  let blank:number;
  switch(difficulty){
    case 0:
      blank = 81 - (37 + Math.floor(37 * Math.random()));
      break;
    case 1:
      blank = 81 - (27 + Math.floor(9 * Math.random()));
      break;
    case 2:
      blank = 81 - (19 + Math.floor(9 * Math.random()));
      break;
    case 3:
      blank = 63;
      break;
    default:
      blank = Math.floor(37 * Math.random());
  }

  for(let i = 0; i < blank; i++){
    let row:number = Math.floor(9*Math.random());
    let col:number = Math.floor(9*Math.random());
    while(!curBoard[row][col]) row = Math.floor(9*Math.random()),col = Math.floor(9*Math.random());
    const clonedBoard = curBoard.map(arr => [...arr])
    while(!isSolvable(clonedBoard)){
      clonedBoard[row][col] = curBoard[row][col];
      row = Math.floor(9*Math.random());
      col = Math.floor(9*Math.random());
      while(!curBoard[row][col]) row = Math.floor(9*Math.random()),col = Math.floor(9*Math.random());
      clonedBoard[row][col] = null;
    }
    curBoard[row][col] = null;
  }
  return curBoard;
}
const initArr:number[] = shuffle([1,2,3,4,5,6,7,8,9]);
const board:(number | null)[][] = [initArr,[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]];
generateBoard(board);
const difficulty:number = 0
const gameBoard:(number | null)[][] = initBoard(board,3)
export default gameBoard;