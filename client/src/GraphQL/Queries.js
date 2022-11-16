import { gql } from "@apollo/client";

const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;
const LOAD_MANAGERS = gql`
  query {
    getAllManagers {
      id
      firstName
      email
      password
    }
  }
`;

module.exports = { LOAD_MANAGERS, LOAD_USERS }