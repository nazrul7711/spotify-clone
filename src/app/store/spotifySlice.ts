import {createSlice} from "@reduxjs/toolkit"

export const spotifySlice = createSlice({
  name:"spotify",
  initialState:{
    value:10,
    showModal:false
  },
  reducers:{
    increment:(state)=>{state.value+=1},
    decrement:state=>{state.value-=1},
    closeModal:state=>{state.showModal=false},
    openModal:state=>{state.showModal=true}

  }
})

export const {increment,decrement,closeModal,openModal} = spotifySlice.actions

export default spotifySlice.reducer