import { createSlice } from '@reduxjs/toolkit'

// icon
const icons = [`src/assets/3d-house.png`,`src/assets/idea.png`,"src/assets/around-the-world.png","src/assets/info.png"]
const iconSlice = createSlice({
    name:"icon",
    initialState:{
        value : icons[0]
    },
    reducers:{
        home : (state)=>{state.value = icons[0]},
        project : (state)=>{state.value = `src/assets/idea.png`},
        connect : (state)=>{state.value = "src/assets/around-the-world.png"},
        about : (state)=>{state.value = "src/assets/info.png"}
    }
})
export const { home, project,connect,about} = iconSlice.actions

export default iconSlice.reducer