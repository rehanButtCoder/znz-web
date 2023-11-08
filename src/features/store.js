import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemReducer from "./counter/counterSlice"
import userReducer from "./user/userSlice"
import seederReducer from "./seeders/seederSlice"
import jobReducer from "./job/jobSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'znz_web',
    version: 1,
    storage,
    blacklist: ['item'] // Exclude 'filterData' from being persisted
}

const rootReducer = combineReducers({
    item: itemReducer,
    user: userReducer,
    seeder: seederReducer,
    job: jobReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)
