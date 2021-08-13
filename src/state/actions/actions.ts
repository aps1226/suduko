export const setBoard = (board:(number|null)[][]) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_BOARD",
      payload:board
    })
  }
}
export const changeColor = (number:string) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"CHANGE_COLOR",
      payload:number
    })
  }
}
export const setSelection = (number?:number) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_SELECTION",
      payload:number
    })
  }
}
export const setDifficulty = (difficulty?:number) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_DIFFICULTY",
      payload:difficulty
    })
  }
}
