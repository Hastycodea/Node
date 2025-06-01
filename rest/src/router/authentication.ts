import express from "express";

import { register } from "../controllers/authentication";

export default (router: express.Router) => {
  console.log("Running the post request")
  router.post("/auth/register", register);
};
