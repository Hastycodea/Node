// import express from "express";
const express = require("express");

// import { json } from "body-parser";
const bodyParser = require("body-parser");
// import v1WorkoutRouter from "./v1/routes/workoutRoutes";
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
