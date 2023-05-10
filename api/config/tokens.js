//Dejo este archivo sin borrar. Ver nota en el archivo de rutas users.js

const jwt = require("jsonwebtoken");
const { SECRET } = {
  NAME: "Auth",
  PORT: 5000,
  DB_HOST: "tmdb",
  SECRET: "string random",
}

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

module.exports = { generateToken };