const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const logger = require("morgan");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser"); 
const dotenv = require("dotenv");

dotenv.config()

// routes
const userRoutes = require("./handlers/users");
const paymentRoutes = require("./handlers/payments");
const transactionRoutes = require("./handlers/transactions");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser()); // Use cookie-parser middleware

app.use(
  logger("common", {
    stream: fs.createWriteStream(path.join(__dirname, ".", "access.log"), {
      flags: "a",
    }),
  })
);

// app.use(
//   session({
//     secret: "SoleilApp",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 * 10 },
//     store: MongoStore.create({
//       mongoUrl: "mongodb://localhost:27017/SoleilAppDB",
//       ttl: 60000 * 10,
//       autoRemove: "native",
//     }),
//   })
// );

app.use("/user", userRoutes);
app.use("/payments", paymentRoutes);
app.use("/transactions", transactionRoutes);

mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Succesfuly connected to db ${process.env.MONGODB_URL} and app running on port ${process.env.PORT}`
    );
  });
}).catch(err => {
  console.log("error while connectiong to db")
});

