
export const forgotToken = args => {

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
        en: 'Password change token',
        es: 'Código para el cambio de contraseña',
      }[language],
      name,
      action: {
        en: 'change your password',
        es: 'cambiar tu contraseña',
      }[language],
      token,
    },
  };

};
