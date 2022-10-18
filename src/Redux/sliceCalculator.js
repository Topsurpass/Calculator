 import { createSlice } from "@reduxjs/toolkit"
 const initialState = [
   {keyCode:103, value:7, id:'seven'},
   {keyCode:104, value:8, id:'eight'},
   {keyCode:105, value:9, id:'nine'},
   {keyCode:100, value:4, id:'four'},
   {keyCode:101, value:5, id:'five'},
   {keyCode:102, value:6, id:'six'},
   {keyCode:97, value:1, id:'one'},
   {keyCode:98, value:2, id:'two'},
   {keyCode:99, value:3, id:'three'},
   {keyCode:96, value:0, id:'zero'},
   {keyCode:110, value:'.', id:'point'},
   
 ]
    

 export const sliceCalculator = createSlice({
    name: 'calculate',
    initialState,
    reducers:{
        addition:(state)=>{
           return state 
        }
    }
 })
export const {addition}= sliceCalculator.actions;
export default sliceCalculator.reducer;
