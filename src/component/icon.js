import { createSlice } from '@reduxjs/toolkit'

// icon
const icons = [
    `https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/Home-icon.png`,           `https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png`,
    "https://cdn0.iconfinder.com/data/icons/virtual-world-2/64/communication_connection_message_connect_chat-1024.png",
    "https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/19-512.png"]
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