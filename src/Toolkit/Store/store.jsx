import { configureStore } from "@reduxjs/toolkit";
import DataSlice from '../Slice/DataSlice';
import SelectedItems from '../Slice/SelectedItemsSlice'
import BranchesSlice from '../Slice/Branches'

let store = configureStore({
    reducer : {DataSlice , SelectedItems , BranchesSlice}
})

export default store;