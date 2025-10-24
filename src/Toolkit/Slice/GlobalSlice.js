import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { supabase } from '../../components/Supabase/SubapaseClient';

export function fetchingData(name,tableName){
  return createAsyncThunk(`${name}/getData `, async(_,thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    // fetching data
    try{
        let {data , error} = await supabase.from(tableName).select('*');
        if(error){
            throw error
        }
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
}

export function globalSlice(init,name,actionName){

    return createSlice({
    name : name,
    initialState : init,
    extraReducers : (builder) =>{
        builder
        .addCase(actionName.pending , (state) => {
            state.loading = true
            state.error     = ''
        })
        .addCase(actionName.fulfilled,(state,action) => {
            state.loading = false
            state.data   = action.payload
            
        })
        .addCase(actionName.rejected , (state,action) => {
            state.loading = false
            state.error     = action.payload
        })
    }
})

}

