const express = require("express");
const users = express.Router();
//En primer término manejé la información del logueo con el store de redux, pero eso no me daba
//la persistencia del usuario logueado. Luego quise generar el token para guardar esa información
//en una cookie pero no se guardaba la cookie en el browser y prioricé terminar los must-have y should-have.
//Como no logré que quedara la cookie guardada no continué con el resto de las rutas para manejar
//la persistencia. Dejo el código por las dudas.
const { generateToken } = require("../config/tokens.js");
const { Users } = require("../db/models/index.js");

users.post("/signup", (req, res) => {
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => res.send(user))
    .catch((error) => console.log(error));
});

users.post("/login", (req, res) => {
  Users.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (user === null) {
        res.sendStatus(401);
      }
      user.validatePassword(req.body.password).then((esValido) => {
        if (!esValido) {
          res.sendStatus(401);
        } else {
          const payload = {
            id: user.dataValues.id,
            username: user.dataValues.username,
          };
          const token = generateToken(payload);
          res.cookie("Usuario logueado", token);
          res.send(user);
        }
      });
    })
    .catch((error) => console.log(error));
});

module.exports = users;
