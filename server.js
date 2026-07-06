import express from "express";
import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";

import authRoutes from "./routes/authRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);
app.use(passport.initialize());

app.use(passport.session());

app.set("view engine", "ejs");

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.use((req, res, next) => {
  return console.log("reqest routes not founds");
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error" });
});

const port = 5000;

async function startserver() {
  try {
    const connect = await connectDB();
    if (!connect) {
      throw new Error(error.message);
    }
    app.listen(port, (err) => {
      if (err) {
        return console.log("fail to connect DB");
      }
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startserver();
