import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './userSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),    
    userApi.middleware,
    ],
})

setupListeners(store.dispatch);