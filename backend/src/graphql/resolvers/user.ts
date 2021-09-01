// Interfaces
import {
  iUser,
  iCreateUserInput,
  iModels,
  iLoginInput,
  iAuthPayload
} from '../../interfaces';

// Utils
import { doLogin } from '../../lib/auth';

export default {
  Query: {
    getUsers: (
      _: any,
      _args: any,
      { models }: { models: iModels }
    ): iUser[] => {
      console.log('reaching here');
      return models.User.findAll();
    }
  },
  Mutation: {
    createUser: (
      _: any,
      { input }: { input: iCreateUserInput },
      { models }: { models: iModels }
    ): iUser => models.User.create({ ...input }),
    login: (
      _: unknown,
      { input }: { input: iLoginInput },
      { models }: { models: iModels }
    ): Promise<iAuthPayload> => doLogin(input.email, input.password, models)
  }
};
