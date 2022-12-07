import { PrismaClient } from '@prisma/client';
import { GraphQLScalarType } from 'graphql';

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
    getEmployeesByDeptid: (_, args) => {
      return prisma.employee.findMany({
        where: { Dept: { Deptid: args.Deptid } },
        include: { Dept: true },
      });
    },
    getDepts: () => {
      return prisma.dept.findMany();
    },
  },
  Mutation: {
    createDept: async (_, args) => {
      return await prisma.dept.create({
        data: {
          DeptName: args.DeptName,
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

export default resolvers;
