
export const createUserEntity = (args, server) => {

  const {
    _id,
    email,
    ...attrs
  } = args;

  return {

    steps: [

      () => {
        return server.model.createEntity({
          _id,
          uniqueKey: email,
          domain: ':users',
          user_id: _id,
          attrs: { email, ...attrs },
        });
      },
    ],

  };


};
