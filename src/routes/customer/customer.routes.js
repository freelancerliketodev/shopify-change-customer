import express from "express";
import customer from "../../controller/customerFetch.js"

const customerRoot = express.Router();

customerRoot.post("/", customer);


export default customerRoot;
