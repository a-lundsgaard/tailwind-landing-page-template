import gql from 'graphql-tag';

// Mutation: Register a user
export const REGISTER_USER = gql`
  mutation($input: UserRegisterInput!) {
    registerUser(input: $input) {
      id
      username
      email
      password
      created_at
    }
  }
`;

// Mutation: User login
export const SIGNIN_USER = gql`
  mutation($input: UserLoginInput!) {
    login(input: $input) {
      user {
        username
        email
      }
      token
    }
  }
`;