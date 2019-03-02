
export const isPasswordCorrect = (args, server) => {

  const {
    email,
    password,
  } = args;

  return {

    steps: [

      () => server.model.getEntityByUniqueKey(email),

      async res => {
        if (!res) return { error: 'EMAIL_IS_NOT_REGISTERED' };

        const currentPassword = await server.model.getKeyCurrentValue({ _id: res._id }, 'password');
        if (!currentPassword) return { error: 'PASSWORD_IS_NOT_DEFINED' };

        const isValid = await server.model.compareWithCurrentValue({
          _id: res._id,
          key: 'password',
          value: password,
          encrypted: true,
        });

        if (!isValid) return { error: 'PASSWORD_IS_NOT_CORRECT' };
        return { _id: res._id, isCorrect: true };

      },


    ],
  };

};

