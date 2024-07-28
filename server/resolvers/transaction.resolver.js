import { transactions } from "../dummyData/data.js";
const transactionResover = {
  Query: {
    transactions: () => {
      return transactions;
    },
    transaction: (_, { _id }) => {
      return transactions.find((transaction) => transaction._id === _id);
    },
  },
  //   Mutation: {},
};

export default transactionResover;
