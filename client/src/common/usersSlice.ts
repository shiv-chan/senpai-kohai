import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
	users: [],
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
	const res = await axios.get('http://localhost:5000/users', {
		withCredentials: true,
	});

	if (res.status !== 201) {
		throw new Error(res.data.message);
	}

	return res.data;
});

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.users = [];
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.users = action.payload.allUsers;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.users = action.payload;
			});
	},
});

export default usersSlice.reducer;
