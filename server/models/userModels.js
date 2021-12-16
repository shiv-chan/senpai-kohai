import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'An email is required.'],
		validate: {
			validator: function (val) {
				return validator.isEmail(val);
			},
			message: 'Please enter a valid email.',
		},
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'A password is required'],
		validate: {
			validator: function (val) {
				return validator.isStrongPassword(val, {
					minLength: 6,
					minLowercase: 1,
					minUppercase: 0,
					minNumbers: 1,
					minSymbols: 0,
				});
			},
			message:
				'A password must be at least 6 charactors including at least one letter and number.',
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
	name: {
		type: String,
		default: '',
	},
	publicEmail: {
		type: String,
		validate: {
			validator: function (val) {
				return validator.isEmail(val);
			},
			message: 'Please enter a valid email.',
		},
	},
	profileImage: {
		type: String,
		default: generator.generateRandomAvatar,
	},
	profileImageId: {
		type: String,
	},
	senpaiProfile: {
		id: {
			type: String,
			default: uuidv4,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		description: {
			type: String,
			default: '',
		},
		techStack: {
			type: Array,
		},
	},
	kohaiProfile: {
		id: {
			type: String,
			default: uuidv4,
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		description: {
			type: String,
			default: '',
		},
		techStack: {
			type: Array,
		},
	},
});

// fire a function before an instance saved to data base
userSchema.pre('save', async function (next) {
	// encrypt the password
	const saltPassword = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, saltPassword);
	next();
});

userSchema.pre('updateOne', function (next) {
  this.options.runValidators = true;
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
