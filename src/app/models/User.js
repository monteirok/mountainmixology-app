const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Users {
    static async findAll() {
        return await prisma.users.findMany();
    }

    static async find(id) {
        return await prisma.users.findUnique({
            where: { user_id: id },
        });
    }
    
    static async create(data) {
        return await prisma.users.create({
            data,
        });
    }

    static async update(id, data) {
        return await prisma.users.update({
            where: { user_id: id },
            data,
        });
    }

    static async delete(id) {
        return await prisma.users.delete({
            where: { user_id: id },
        });
    }
}

module.exports = Users;