import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAuto: {
    type: String,
    required: true
  }
});


let User = mongoose.model('User', userSchema);

export default {
  User: User
}