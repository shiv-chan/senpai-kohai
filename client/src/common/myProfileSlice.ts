import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: any = {
	myProfile: {},
};

export const getProfile = createAsyncThunk('myProfile/getProfile', async () => {
	const res = await axios.get(
		'https://senpai-kohai-backend.herokuapp.com/users',
		{
			withCredentials: true,
		}
	);

	if (res.status !== 201) {
		throw new Error(res.data.message);
	}

	return res.data;
});

const myProfileSlice = createSlice({
	name: 'myProfile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProfile.pending, (state) => {
				state.myProfile = {};
			})
			.addCase(getProfile.fulfilled, (state, action) => {
				const allUsers = action.payload.allUsers;
				const userId = action.payload._id;
				const user = allUsers.filter(
					(user: { _id: any }) => user._id === userId
				);
				state.myProfile = user[0];
			})
			.addCase(getProfile.rejected, (state, action) => {
				state.myProfile = action.payload;
			});
	},
});

export default myProfileSlice.reducer;
