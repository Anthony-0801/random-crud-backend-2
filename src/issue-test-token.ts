import jwt from "jsonwebtoken";
import config from "./config";

const payload = {
  sub: "edd0d6cf-1221-4f86-98d2-9508134f95aa",
};

const token = jwt.sign(payload, config.appSecret, {
  expiresIn: "1h",
  issuer: "task-manager-app",
});

console.log("Test token:", token);
