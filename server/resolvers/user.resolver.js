import { users } from "../dummyData/data.js";
const userResover = {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },
  //   Mutation: {},
};
export default userResover;
