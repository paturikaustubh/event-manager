import mongoose from "mongoose";

const Mongodb_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDb = async () => {
  if (cached.conn) return cached.conn;

  if (!Mongodb_URI) throw new Error("Mongodb details are missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(Mongodb_URI, {
      dbName: "Eventure",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
