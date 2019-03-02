
export const signupToken = args => {

  const {
    token,
    email,
    language,
    name,
  } = args;

  return {

    template: 'token',
    email,
    language,
    plainText: {
      en: `Your token is ${token}`,
      es: `Tu token es ${token}`,
    }[language],
    data: {
      subject: {
        en: 'Account registration token',
        es: 'Código para el registro de tu cuenta',
      }[language],
      name,
      action: {
        en: 'finish your account registration',
        es: 'finalizar el registro de tu cuenta',
      }[language],
      token,
    },
  };

};
