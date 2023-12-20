const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const readUsers = require('./read.js')

async function createUser(username, email, password, first_name, last_name) {
    await prisma.users.create({
        data: {
            username: username,
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
          },
    });

    readUsers()
      .then(() => {
        console.log('USERS:');
      })
      .catch((e) => {
        console.error('Error reading users:', e);
      });
    
    // log all users
    const allUsers = await prisma.users.findMany()
    console.log(allUsers);

    console.dir(allUsers, { depth: null })
  }

  // execute method
  createUser('s', 'te@test.com', 'pass', 'test', 'account')
  .then(async () => {
    // close database connection
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
