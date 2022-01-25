import Mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  const db = await Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
}
