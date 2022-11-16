import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation 
  createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
export const CREATE_MANAGER_MUTATION = gql`
  mutation 
  createManager(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ) {
    createManager(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;


//module.exports = { CREATE_USER_MUTATION, CREATE_MANAGER_MUTATION }
