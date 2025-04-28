import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    appointments: [Appointments!]!
    products: [Product!]!
    customers: [Customer!]!
  }

  type Mutation {
    editApplyForFinance(input: EditApplyForFinanceInput!): ApplyForFinanceResponse!
  }

  type Appointments {
    id: ID!
    Work_Type: String!
    Status: String!
    Appointment_ID: String!
    products: [Product!]!
    customers: [Customer!]!
  }

  type Product {
    id: ID!
    Product: String!
    Product_ID: String!
  }

  type Customer {
    id: ID!
    Customer_name: String!
    Address: String!
    Mobile: String!
  }

  input EditApplyForFinanceInput {
    id: ID!
    Finance_amount: Float!
  }

  type ApplyForFinanceResponse {
    success: Boolean!
    message: String!
  }
`;

export default typeDefs;