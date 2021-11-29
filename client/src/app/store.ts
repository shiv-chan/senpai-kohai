import { configureStore } from '@reduxjs/toolkit';
import authorizationReducer from '../common/authorizationSlice';
import usersReducer from '../common/usersSlice';
import myProfileReducer from '../common/myProfileSlice';

const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
		users: usersReducer,
		myProfile: myProfileReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
