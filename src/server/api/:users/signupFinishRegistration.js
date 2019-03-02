
export const signupFinishRegistration = (args, server) => {

  const {
    _id,
    password,
    token,
  } = args;

  return {

    steps: [

      () => server.model.compareWithCurrentValue({ _id, key: 'signupToken', value: token }),

      res => {
        if (!res) return { error: 'INVALID_SIGNUP_TOKEN' };
        return server.model.addAttrsToEntity({
          _id,
          attrs: [
            { key: 'password', value: password, encrypt: true },
            { key: 'isRegistered', value: true },
          ],
        });
      },

    ],

  };

};
