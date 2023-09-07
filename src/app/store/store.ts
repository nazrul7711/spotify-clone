import {configureStore} from "@reduxjs/toolkit"
import spotifySlice from "./spotifySlice"

export const store = configureStore({
  reducer:{
    spotify:spotifySlice
  }
})

export type rootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch