const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Users = require('../../models/User');

async function readUsers() {
  /**
   * METHOD 1: select all columns
   */
  const allUsers = await prisma.users.findMany()

  /**
   * METHOD 2: select specific columns
   */
  // get all users
  // const allUsers = await prisma.users.findMany({
  //   // specify what columns you want
  //   select: {
  //     user_id: false,
  //     username: false,
  //     email: true,
  //     password: false, // won't select password (since set to 'false')
  //     first_name: true,
  //     last_name: true,
  //     create_time: true
  //   }
  // })

  // log users
  // console.log(allUsers)
}

readUsers()
  .then(async () => {
    // close database connection
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

module.exports = readUsers;