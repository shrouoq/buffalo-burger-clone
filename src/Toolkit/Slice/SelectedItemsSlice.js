import { createSlice } from '@reduxjs/toolkit';

const selectedItems = () => {
    try{
        let selected = localStorage.getItem('selectedItems');
        return selected ? JSON.parse(selected) : []
    }catch(e){
        console.log(e.message);
        return []
    }
}

const saveItems = (items) => {
    try{
        localStorage.setItem('selectedItems' , JSON.stringify(items));
    }catch(err){
        console.log(err);
    }
}

const init = {
    items    : selectedItems(),
}

const ItemsSlice = createSlice({
    name         : 'selectedItems',
    initialState : init,
    reducers     : {
        setItems : (state) => {
            const stored = selectedItems();
            if(JSON.stringify(state.items) !== JSON.stringify(stored)){
                state.items = stored;
            }
        },
        addItem : (state,action) => {
            state.items.push(action.payload);
            saveItems(state.items)
            console.log(state.items);
            
        },
        RemoveItem : (state,action) => {
            const filterdItems = state.items.filter(item => item.id !== action.payload.id);
            state.items = filterdItems
            saveItems(state.items)
        },
        resetItems : (state) => {
            state.items = [];
            saveItems([]);
        },
        increase : (state,action) => {
            const choosed = state.items.find(item => item.sandwich.id === action.payload.sandwich.id);
            if(choosed){
                choosed.quantity += 1;
                saveItems(state.items);
            }
        },
        decrease : (state , action) => {
            let choosed = state.items.find(item => item.sandwich.id === action.payload.sandwich.id)
            if(choosed){
                if(choosed.quantity === 1){
                    const items = state.items.filter(item => item.sandwich.id !== choosed.sandwich.id);
                    state.items = items
                    saveItems(state.items);
                }else{
                    choosed.quantity-= 1;
                    saveItems(state.items);
                }
            }
        }
    }
})

export default ItemsSlice.reducer;
export const {setItems , addItem , resetItems , RemoveItem , increase , decrease} = ItemsSlice.actions;

