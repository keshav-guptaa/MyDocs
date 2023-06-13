import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb+srv://guptakg28:28MarchKeshav@docx.rvgj5au.mongodb.net/?retryWrites=true&w=majority";

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
