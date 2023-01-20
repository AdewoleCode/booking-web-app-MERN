import { configureStore } from '@reduxjs/toolkit'

import SearchSlice from './slices/SearchSlice';


const store = configureStore({
    reducer: {
        search: SearchSlice
    }
});

export default store;