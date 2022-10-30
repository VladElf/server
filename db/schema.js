const { gql } = require('apollo-server');

const typeDefs = `
  type Employee {
    Userid: Int!
    Name: String!
    Dept: Dept
  }
  type Dept {
    DeptName: String
    Employees: [Employee]
  }

  type Query {
    getEmployees: [Employee]
    getDepts: [Dept]
  }
`;
module.exports = typeDefs;
