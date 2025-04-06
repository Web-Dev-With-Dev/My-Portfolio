// /api/post.js
import mongoose from 'mongoose';
const uri = "mongodb+srv://gondaliyadev007:WmPYQn0XnGP777ts@mymongodb.ahy8zji.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb";

const userSchema = new mongoose.Schema({
  first: String,
  email: String,
  subject: String,
  text: String
});

let Users;

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
  Users = mongoose.models.data || mongoose.model("data", userSchema);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { first, email, subject, text } = req.body;

  if (!first || !email || !subject || !text) {
    return res.status(400).send("All fields are required.");
  }

  try {
    await connectDB();
    const user = new Users({ first, email, subject, text });
    await user.save();
    return res.status(200).send("Form submission successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error saving to database");
  }
}
