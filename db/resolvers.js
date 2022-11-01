const { PrismaClient } = require('@prisma/client');
const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'DateTime',
  parseValue: (value) => new Date(value),
  serialize: (value) => value.toISOString(),
});

const prisma = new PrismaClient();

const resolvers = {
  DateTime: dateScalar,
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
    createItem: async (_, { input }) => {
      const { title, summary, imageURL } = input;
      return await prisma.item.create({
        data: {
          title: title,
          summary: summary,
          imageURL: imageURL,
        },
      });
    },
    createOrder: async (_, { input }) => {
      const { type, date, place, status, Userid, Itemid } = input;
      return await prisma.order.create({
        data: {
          type: type,
          date: date,
          place: place,
          Userid: Userid,
          Itemid: Itemid,
          status: status,
        },
      });
    },
  },
};

module.exports = resolvers;
