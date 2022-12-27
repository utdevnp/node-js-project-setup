import mongoose from 'mongoose';

const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = encodeURIComponent(process.env.DB_PASS);

let mongoDB = "";

if (process.env.NODE_ENV == "local") {
  //mongoDB = "mongodb://localhost:27017";
  mongoDB = `mongodb://${dbHost}:${dbPort}/${dbName}?authSource=admin`;
} else {
  mongoDB = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
}

const connectDB = function () {
  mongoose.set("strictQuery", true);

  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('DB CONNECTED');
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('DB DISCONNECTED');
  });

  mongoose.connection.on('error', (err) => {
    console.log('DB DISCONNECTED', err);
    process.exit(1);
  });

  mongoose.connection.on('reconnected', () => {
    console.log('DB RECONNECTED');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close();
    console.log('DB disconnected due to application termination');
    process.exit(0);
  });

}

export default connectDB;
