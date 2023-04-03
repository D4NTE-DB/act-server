const UserServices = require("../services/users.service")


const getAllUsers = async (req, res) => {
    try {
        const data = await UserServices.getAll()
        res.json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserServices.getById(id)
        res.json(user)
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
}