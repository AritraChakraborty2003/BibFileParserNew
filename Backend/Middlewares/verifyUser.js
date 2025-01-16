import dotenv from "dotenv";

dotenv.config();

export const verifyUser = (req, res, next) => {
  //   console.log(req.query, process.env.apiKey);
  // if (req.query.apiKey === process.env.apiKey) {
    next();
  // } else {
  //   res.json({ status: 401, message: "Invalid API key" });
  // }
};
