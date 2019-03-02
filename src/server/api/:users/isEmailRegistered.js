
export const isEmailRegistered = (args, server) => {

  const { email } = args;

  return {

    steps: [

      () => server.model.getEntityByUniqueKey(email),
      res => {

        if (!res) return { isRegistered: false };

        const isRegistered = res.attrs.find(item => item.key === 'isRegistered' && item.value);
        const isFBRegistered = res.attrs.find(item => item.key === 'isFBRegistered' && item.value);

        return {
          _id: res._id,
          isRegistered,
          isFBRegistered,
        };
      },

    ],
  };


};
