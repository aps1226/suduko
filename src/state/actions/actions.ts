import {Colors, GameState ,Notes,Timer} from '../../../types'

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

export const defaultColors = () =>{
  return (dispatch:any) =>{
    dispatch({
      type:"DEFAULT_COLORS"
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

export const setTimer = (timer:Timer) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_TIMER",
      payload:timer
    })
  }
}

export const setEntryMode = (entryMode:boolean) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_ENTRY_MODE",
      payload:entryMode
    })
  }
}

export const setNotes = (notes:Notes) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_NOTES",
      payload:notes
    })
  }
}

export const defaultNotes = () =>{
  return (dispatch:any) =>{
    dispatch({
      type:"DEFAULT_NOTES",
    })
  }
}

export const setGameState = (gameState:GameState) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"SET_GAME_STATE",
      payload:gameState
    })
  }
}