// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define the Message schema and model
const messageSchema = new mongoose.Schema({
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Route to get messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.status(200).send(messages);
});

// Route to post a new message
app.post('/messages', async (req, res) => {
  const { text } = req.body;
  const newMessage = new Message({ text });
  await newMessage.save();
  res.status(201).send(newMessage);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
