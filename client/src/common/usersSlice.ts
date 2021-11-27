import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
	users: null,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
	const res = await axios.get('http://localhost:5000/users', {
		withCredentials: true,
	});

	if (res.status !== 201) {
		throw new Error(res.data.message);
	}

	return res;
});

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.users = null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.users = action.payload.data.allUsers;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.users = action.payload;
			});
	},
});

export default usersSlice.reducer;
