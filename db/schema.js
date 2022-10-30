const { gql } = require('apollo-server');

const typeDefs = `

#* TYPES *#

  type Employee {
    Userid: Int!
    Name: String!
    Dept: Dept
  }
  type Dept {
    DeptName: String
  }

#* QUERIES *#

  type Query {
    getEmployees: [Employee]
    getDepts: [Dept]
    getEmployeesByDept:[Employee]
  }

#* INPUTS *#

input DeptInput {
  DeptName:String!
}

#* MUTATIONS *#

  type Mutation {
    createDept(input: DeptInput): String
  }
`;
module.exports = typeDefs;
