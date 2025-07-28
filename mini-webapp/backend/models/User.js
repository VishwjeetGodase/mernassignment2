import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  tech: String,
});

export default mongoose.model('User', userSchema);
