
export const addAttrsToUserEntity = (args, server) => {

  const {
    _id,
    attrs,
  } = args;

  return {

    steps: [

      () => {
        return server.model.addAttrsToEntity({
          _id,
          attrs: Object.keys(attrs).map(key => {
            return {
              key,
              value: attrs[key]
            };
          }),
        });
      },

    ],

  };

};
