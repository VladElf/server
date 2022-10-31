const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getEmployees: () => {
      return prisma.employee.findMany({ include: { Dept: true } });
    },
    getEmployeesByDept: () => {
      return prisma.employee.findMany({
        where: { Dept: { DeptName: { contains: 'proyectos' } } },
        include: { Dept: true },
      });
    },
    getDepts: () => {
      return prisma.dept.findMany();
    },
  },
  Mutation: {
    createDept: async (_, { input }) => {
      const { DeptName } = input;
      return await prisma.dept.create({
        data: {
          DeptName: DeptName,
        },
      });
    },
  },
};

module.exports = resolvers;
