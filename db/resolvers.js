const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getEmployees: () => {
      return prisma.employee.findMany();
    },
    getDepts: () => {
      return prisma.dept.findMany();
    },
  },
};

module.exports = resolvers;
