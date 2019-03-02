
export const setNewPassword = (args, server) => {

  const {
    email,
    password,
    token,
    tokenField, // 'forgotToken'
  } = args;

  return {

    steps: [

      () => server.model.compareWithCurrentValue({ uniqueKey: email, key: tokenField, value: token }),

      async res => {
        if (!res) return { error: 'INVALID_FORGOT_TOKEN' };
        const userObject = await server.model.getEntityByUniqueKey(email);
        await server.model.addAttrsToEntity({
          uniqueKey: email,
          attrs: { key: 'password', value: password, encrypt: true },
        });
        return { user_id: userObject._id };
      }

    ],

  };

};
