import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { getAllPro } from '../services/ProductService'
import axios from 'axios';
import {API_URL} from '../util/API_URL'

let getPro = createAsyncThunk('get', async()=>{
    let response = await axios.get(`${API_URL}`)
    return response.data;
    // return await getAllPro();
})


let ProductSlice = createSlice({
    name : "product",
    initialState : [],
    reducers : {
        // getFirst6Pro(state, action){
        //     // return state.slice(0, 6);
        // }
    },
    extraReducers : (builder)=>{
        builder.addCase(getPro.fulfilled, (state, action)=>{
            // state.push(action.payload)/
            return action.payload;
        })
    }

})

export default ProductSlice.reducer;
export { getPro };