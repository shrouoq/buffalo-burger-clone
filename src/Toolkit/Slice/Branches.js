import { fetchingData, globalSlice } from './GlobalSlice';

export const getBranches = fetchingData('branchesData','branches');

let init = {data: [] , loading: false , error: ''};

let BranchesSlice = globalSlice(init,'productsData',getBranches);

export default BranchesSlice.reducer;