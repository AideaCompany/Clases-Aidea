const fs = require('fs')

async function verMiUsuarios() {
  const usuarios = await fs.readFileSync('./usuarios.json', { encoding: 'utf8' })
  return JSON.parse(usuarios)
}

async function agregarUsuarios(nuevoUsuario) {
  const usuarios = await fs.readFileSync('./usuarios.json', { encoding: 'utf8' })
  const myUsuariosEnJSON = JSON.parse(usuarios)
  myUsuariosEnJSON.push(nuevoUsuario)

  const misUsuariosEnString = JSON.stringify(myUsuariosEnJSON)
  fs.writeFileSync('./usuarios.json', misUsuariosEnString)

  return myUsuariosEnJSON
}
async function deleteUsuario(index) {
  const usuarios = await fs.readFileSync('./usuarios.json', { encoding: 'utf8' })
  const myUsuariosEnJSON = JSON.parse(usuarios)

  if (index > -1) {
    // only splice array when item is found
    myUsuariosEnJSON.splice(index, 1) // eliminar una posición
    const misUsuariosEnString = JSON.stringify(myUsuariosEnJSON)
    fs.writeFileSync('./usuarios.json', misUsuariosEnString)

    return myUsuariosEnJSON
  }
}

module.exports = { verMiUsuarios, agregarUsuarios, deleteUsuario }
