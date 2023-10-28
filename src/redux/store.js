
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsReduser";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./Auth/slice";

const contactsConfig = {
	key: ['contacts', 'auth'],
	storage,
	whitelist: ['themes', 'token'],
};


export const store = configureStore({
	reducer: {
		contacts: persistReducer(contactsConfig, contactsReducer),
		auth: persistReducer(contactsConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);