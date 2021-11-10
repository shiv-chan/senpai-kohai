import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: new Date(),
	},
	publicEmail: {
		type: String,
	},
	senpaiProfile: {
		id: {
			type: String,
			default: uuidv4(),
		},
		description: {
			type: String,
		},
		techStack: {
			type: Array,
		},
	},
	kohaiProfile: {
		id: {
			type: String,
			default: uuidv4(),
		},
		description: {
			type: String,
		},
		techStack: {
			type: Array,
		},
	},
});

const User = mongoose.model('User', userSchema);

export default User;
