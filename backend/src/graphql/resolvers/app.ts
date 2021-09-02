import { iApp, iModels, iCreateAppInput } from '../../interfaces';

export default {
  Query: {
    getApps: (_: any, _args: any, { models }: { models: iModels }): iApp[] => {
      return models.App.findAll({
        include: [
          {
            model: models.Model,
            as: 'models'
          }
        ]
      });
    },
    getAppById: async (
      _: any,
      { id }: { id: string },
      { models }: { models: iModels }
    ): Promise<iApp> => {
      const data = await models.App.findAll({
        where: {
          id
        }
      });

      return data[0];
    }
  },
  Mutation: {
    createApp: (
      _: any,
      { input }: { input: iCreateAppInput },
      { models }: { models: iModels }
    ): iApp => models.App.create({ ...input })
  }
};
