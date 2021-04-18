"use strict";

import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./Config/db";
import path from "path";

const PORT = process.env.PORT || 5000;

//Initializing the middlewares
app.use(express.json({ extended: false }));

//Define route
app.use("/api/users", require("./routes/api/users"));

//serve static asset
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Connect to MongoDB
connectDB();

//Express Server started
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
