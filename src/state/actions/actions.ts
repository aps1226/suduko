export const incrementPosition = (position:any) =>{
  return (dispatch:any) =>{
    dispatch({
      type:"INCREMENT",
      payload:position
    })
  }
}