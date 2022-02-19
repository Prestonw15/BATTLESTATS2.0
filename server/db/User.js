import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},
password: {
  type: String,
  required: true,
  minLength: 8
},
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
},
{
  toJSON: {
    virtuals: true
  }
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


const User = mongoose.model('User', UserSchema);

export default User; 
