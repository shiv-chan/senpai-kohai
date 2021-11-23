import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IAuthorizationState {
	hasValidToken: undefined | boolean;
}

const initialState: IAuthorizationState = {
	hasValidToken: undefined,
};

export const checkValidToken = createAsyncThunk(
	'authorization/checkValidToken',
	async () => {
		const res = await axios.get('http://localhost:5000/authorization', {
			withCredentials: true,
		});

		if (res.status !== 201) {
			throw new Error(res.data.message);
		}
	}
);

const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(checkValidToken.pending, (state) => {
				state.hasValidToken = undefined;
			})
			.addCase(checkValidToken.fulfilled, (state) => {
				state.hasValidToken = true;
			})
			.addCase(checkValidToken.rejected, (state) => {
				state.hasValidToken = false;
			});
	},
});

export default authorizationSlice.reducer;