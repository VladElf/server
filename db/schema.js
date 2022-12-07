import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar DateTime
  #* TYPES *#

  type Employee {
    Userid: Int!
    Name: String!
    Dept: Dept
  }
  type Dept {
    Deptid: Int!
    DeptName: String!
  }
  type Item {
    Itemid: Int!
    title: String!
    summary: String
    imageURL: String
    active: Boolean
  }
  type Order {
    Orderid: Int!
    type: String!
    date: DateTime!
    place: String!
    comments: String
    status: String
    Employee: Employee
    Item: Item
  }

  #* QUERIES *#

  type Query {
    getEmployees: [Employee!]!
    getDepts: [Dept]
    getEmployeesByDeptid(Deptid: Int!): [Employee]
    getItems: [Item]
    getActiveItems: [Item]
    getItemByTitle(title: String!): Item
    getOrders: [Order]
    getOrdersByStatus(status: String!): [Order]
    getOrderByEmployee(Userid: String): Order
  }

  #* INPUTS *#

  input DeptInput {
    DeptName: String!
  }
  input ItemInput {
    title: String!
    summary: String
    imageURL: String
    active: Boolean = false
  }
  input OrderInput {
    type: String!
    date: DateTime!
    place: String!
    comments: String
    status: String = "REQUIRED"
    Userid: String!
    Itemid: Int!
  }

  #* MUTATIONS *#

  type Mutation {
    createDept(DeptName: String!): Dept
    createItem(input: ItemInput): Item
    createOrder(input: OrderInput): Order
  }
`;
export default typeDefs;
