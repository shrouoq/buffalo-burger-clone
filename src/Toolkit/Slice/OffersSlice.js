import { fetchingData, globalSlice } from "./GlobalSlice";

export const getOffersData = fetchingData('offersData','offers');

let init = {data: [] , loading: false , error: ''};

let OffersSlice = globalSlice(init,'offersData',getOffersData);

export default OffersSlice.reducer;