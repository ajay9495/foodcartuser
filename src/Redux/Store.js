
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Slice'
import ProductListSlice from './ProductListSlice';
import CartSlice from './CartSlice';
import SearchSlice from './SearchSlice';
import UserSlice from './UserSlice';
import AddressSlice from './AddressSlice';
import DialogueSlice from './DialogueSlice';

const store = configureStore({
    reducer:{
        main: mainReducer,
        productList: ProductListSlice,
        cart: CartSlice,
        search: SearchSlice,
        user: UserSlice,
        address: AddressSlice,
        dialogue: DialogueSlice
    }
});


export default store;


