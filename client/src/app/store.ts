import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer from '../common/authorizationSlice';
import usersReducer from '../common/usersSlice';

const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
