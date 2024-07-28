const userTypeDef = `#graphql
    type User {
        _id: ID!
        username: String!
        name: String!
        password: String!
    }
    
    type Query {
        users: [User!]
        authUser: User
        user(userId: ID!): User
    }

    # type Mutation {
    #     signUp(input: SingUpInput!): User
    #     login(input: LoginInput!): User
    #     logout: LogoutResponse
    # }

    # type SingUpInput {
    #     username: String!,
    #     name: String!,
    #     password: String!
    # }

    # type LoginInput {
    #     username: String!
    #     password: String!
    # }

    # type LogoutResponse {
    #     message: String!
    # }

`
export default userTypeDef;