import { configureStore, createSlice, createAsyncThunk, applyMiddleware, asyncThunkCreator } from "@reduxjs/toolkit";


let getPage = createAsyncThunk('get', async()=>{
    let response = await axios.get(`${API_URL}`)
    return response.data;
    // return await getAllPro();
})

const pageSlice = createSlice({
    name : "pages",
    initialState :{
        page : [],
        pagePerPage : 3,
        currentPage : 1
    },
    reducers:{
        onNavigateNext : () =>{},
        onNavigatePrev : () =>{},
        onChangePagePerPage : () =>{},
        onclickCurrentPage :() => {}
    }
})

const store = configureStore({reducer:{
    pageStore : pageSlice.reducer
}},applyMiddleware(asyncThunkCreator))

export default store;
