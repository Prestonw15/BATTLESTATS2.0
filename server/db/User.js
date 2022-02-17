import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    isRequired: true,
    isUnique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},
password: {
  type: String,
  isRequired: true,
  minLength: 8
},
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});


const User = mongoose.model('User', UserSchema);

export default User; 
