import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    // middleware: getDefaultMiddleware => [
    // ...getDefaultMiddleware(),    
    // usersReducer.middleware,
    // ],
})

// setupListeners(store.dispatch);