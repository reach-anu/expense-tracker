const transactionTypeDef = `#graphql
    type Transaction {
        _id: ID!
        userID: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
    }
    
    type Query {
        transactions: [Transaction!]
        transaction(_id: ID!): Transaction
    }

    # type Mutation {
    #     createTransaction(input: CreateTransactionInput!): Transaction
    #     updateTransaction(input: UpdateTransactionInput!): Transaction
    #     deleteTransaction(transactionId: ID!): Transaction
    # }

    # type CreateTransactionInput {
    #     description: String!
    #     paymentType: String!
    #     category: String!
    #     amount: Float!
    # }

    # type UpdateTransactionInput {
    #     transactionId: ID!
    #     description: String
    #     paymentType: String
    #     category: String
    #     amount: Float
    # }

`;

export default transactionTypeDef;
