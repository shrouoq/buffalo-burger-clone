import { fetchingData, globalSlice } from './GlobalSlice';

export const getData = fetchingData('productsData','products');

let init = {data: [] , loading: false , error: ''};

let Dataslice = globalSlice(init,'productsData',getData);

export default Dataslice.reducer;