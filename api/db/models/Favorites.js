const Sequelize = require("sequelize");
const db = require("../index.js");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      //Este atributo es para saber si el favorito guardado es una película o una serie
      type: Sequelize.STRING,
      allowNull: false,
    },
    tmdbId: {
      //Acá se va a almacenar el ID de la película/serie en la API para que se pueda volver a acceder
      //a la información del favorito sin tener que guardarla en nuestra base de datos
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    posterURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
