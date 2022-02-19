import db from '../db/index.js';
import auth from '../utils/auth.js';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await db.models.User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async (parent) => {
      console.log(db)
      return db.models.User.find({})
        .select('-__v -password')
        .populate('friends');
    },
    user: async (parent, { username }) => {
      return db.models.User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args)
      const user = await db.models.User.create(args);
      // const token = signToken(user);

      return { user };
    },
    login: async (parent, { email, password }) => {
      const user = await db.models.User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

export default resolvers;