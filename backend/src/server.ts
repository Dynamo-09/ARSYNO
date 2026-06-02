import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import contactRoutes from './routes/contactRoutes';

dotenv.config();

// Connect to database (will fail gracefully if Mongo isn't running)
connectDB().catch(console.error);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('ARSYNO API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
