// Configuración inicial
const express = require("express");
const { verMiUsuarios, agregarUsuarios } = require("./misusuarios");
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())


//leer
app.get('/usuarios', async function (req, res) {
    const usuarios = await verMiUsuarios()
    console.log(usuarios)
    res.json(usuarios);
});

//crear
app.post("/usuarios",function(request, response) {

for (let index = 0; index < request.body.length; index++) {
    agregarUsuarios(request.body[index].nombre)
}
    response.send("Usuarios agregados con exito");

})
// //actualizar
// app.put()
// //delete
// app.delete()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});