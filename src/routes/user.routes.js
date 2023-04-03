const { Router } = require('express');
const User = require('../models/users.models')
const { getAllUsers, getUsersById } = require("../controllers/user.controllers")

const router = Router();

router.get('/api/v1/users', getAllUsers);

//SELECT * FROM users where id = 3;
// TODO queremos encontrar un usuario por su id

//id es const { id }
// encontar by id
router.get('/api/v1/users/:id', getUsersById)

router.get('/api/v1/users/email/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({
            where: { email },
            attributes: ["id", "email", "name"]
        })
        res.json(user)
    } catch (error) {

    }
})

router.post('/api/v1/users/', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await User.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.put('/api/v1/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await User.update(data, {
            where: { id }
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)

    }
})

router.delete('/api/v1/users/:id', async (req, res) => {
    res.send(id)
    const result = await User.destroy({
        where: { id }
    })
    res.status.apply(204).json(result)
    try {
        const { id } = req.params; //objeto
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router


// * MVC (Moodelo Vista Controlador)
// * Vista =.