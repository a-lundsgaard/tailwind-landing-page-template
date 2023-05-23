import gql from 'graphql-tag';

// Query: Get all users
export const getAllUsersQuery = gql`
  query {
    getAllUsers {
      id
      username
      email
      password
      created_at
    }
  }
`;