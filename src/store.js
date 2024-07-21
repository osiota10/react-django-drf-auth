// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// const middleware = [thunk];

// const store = configureStore({
//     reducer: rootReducer,
//     initialState,
//     middleware: (getDefaultMiddleware) => enhancedCompose(
//         enhancedApplyMiddleware(...middleware)
//     ),
//     // devTools: process.env.NODE_ENV !== 'production', // Only use dev tools in development
// });

// const store = configureStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

const store = configureStore({
    reducer: rootReducer,
    initialState,
})

export default store;
