// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const { configureStore } = require('@reduxjs/toolkit');

const initialState = {};


const store = configureStore({
    reducer: rootReducer,
    initialState,
})

export default store;
