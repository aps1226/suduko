import {Colors} from '../../../types'

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
export const defaultColors = (defaultColors:Colors) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"DEFAULT_COLORS",
      payload:defaultColors
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
export const setTime = (time:number) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_TIME",
      payload:time
    })
  }
}
