import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add more options if needed
    };

    await mongoose.connect(uri, options);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
