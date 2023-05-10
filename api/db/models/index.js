const Users = require("./Users.js")
const Favorites = require("./Favorites.js")

Favorites.belongsTo(Users, { as: 'user' });
Users.hasOne(Favorites);

module.exports = {Favorites, Users}