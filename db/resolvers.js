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
    createDept: (_, { input }) => {
      console.log(input);
      /*  return prisma.dept.create({
        DeptName,
      }); */
    },
  },
};

module.exports = resolvers;
