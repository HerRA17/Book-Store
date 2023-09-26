let dotenv = require("dotenv");
dotenv.config();

export const PORT = 5555;

export const mongoDBURL = process.env.MONGOLAB_URI;