const userRepository = require("../repositories/userRepository")


// REGRA DE NEGOCIO
async function getUsers(){
    return await userRepository.findAll()
}

async function getUserById(id){
    const user = await userRepository.findById(id)

    if(!user){
        return {
            success: false,
            error: "User not found"
        }
    }

    return {
        success: true,
        data: user
    }
}

async function createUser(name, age){
    return await userRepository.createUser(name,age)
}

async function deleteUser(id){

  const result = await userRepository.deleteUser(id)

  if(result.affectedRows === 0){
    throw new Error("User not found")
  }

  return true
}

async function updateUser(id, name, age){

  const result = await userRepository.updateUser(id, name, age)

  if(result.affectedRows === 0){
    throw new Error("User not found")
  }

  return {
    id,
    name,
    age
  }
}

module.exports ={
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}