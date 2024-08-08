import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSliceQ';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store