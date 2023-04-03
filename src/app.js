const express = require("express");
const db = require('./utils/database');
const User = require('./models/users.models')
const userRoutes = require('./routes/user.routes')
const cors = require('cors')

const PORT = 8000;

db.authenticate()
.then(() => {
    console.log('Conexion OK')
}) 
.catch((error) => {
    console.log(error)
})

db.sync()  
.then(() => {
    console.log('Synchronized   DB')
})
.catch((error) => {
    console.log(error)
});

// const morgan = require("morgan");
const app = express();


app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.get('/', (req,res) =>{
    res.send('Bienvenido a mi servidor')
})

// app.get('/users', (req,res) =>{
//     res.send('Bienvenido')
// })

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})