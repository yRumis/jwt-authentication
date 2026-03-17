const db = require ("../../database/db")


// acesso ao banco, modifica, cria, deleta
async function findAll(){

    const [rows] = await db.query("SELECT * FROM users")

    return rows
}

async function findById(id){

    const [rows] = await db.query(
        "SELECT * FROM users WHERE id = ?",
        [id]
    )
    return rows[0]
}

async function createUser(name, age){

   const [result] = await  db.query(
    "INSERT INTO users (name, age) VALUES (?, ?)",
    [name,age])

    return{
        id:result.insertId,
        name,
        age
    }
}

async function updateUser(id, name, age){

  const [result] = await db.query(
    "UPDATE users SET name = ?, age = ? WHERE id = ?",
    [name, age, id]
  )

  return result
}

async function deleteUser(id){

  const [result] = await db.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  )

  return result
}

module.exports = {
    findAll,
    findById,
    createUser,
    deleteUser,
    updateUser
}