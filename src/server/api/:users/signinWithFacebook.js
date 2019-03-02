
export const signinWithFacebook = (args, server) => {

  const {
    email,
  } = args;

  return {

    steps: [

      () => server.model.getEntityByUniqueKey(email),

      res => {
        if (!res) return { error: 'USER_NOT_FB_REGISTERED' };

        return { _id: res._id };
      },
    ],

  };

};
