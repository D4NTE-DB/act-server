const User = require("../models/users.models")

class UserServices {
    // Metodo estatico

    static async getAll() {
        try {
            const users = await User.findAll()
            return users
        } catch (error) {
            throw error;
        }

    }

    static async getById() {
        try {
            const users = await User.findByPk(id, {
                attributes: ["id", "email", "name"]
            })
            return users;
        } catch (error) {
            throw error;
        }

    }
}

module.exports = UserServices;