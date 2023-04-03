const Users = require("./user.models")
const toDos = require("./toDo.models")
const Categories = require("./category.models");

const initModels = () => {
    // TODO relacion entre Users y Posts
    // * BelongsTo
    // * hasMany

    // user_id fk 

    Users.hasMany(toDos, {foreignKey: 'id'});
    toDos.belongsTo(Users, {foreignKey: 'id'}); 

    Categories.hasMany(toDos, {foreignKey: 'id'})
    toDos.belongsTo(Categories, {foreignKey: "id"})
}

module.exports = initModels;