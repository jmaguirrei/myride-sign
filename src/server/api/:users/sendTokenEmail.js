
import * as emails from '../../lib/emails';

export const sendTokenEmail = (args, server) => {

  const {
    email,
    language,
    tokenField,
  } = args;

  const token = String(Math.trunc(Math.random() * 900000) + 100000);
  const template = emails[tokenField];
  let user_id;

  return {

    steps: [

      () => server.model.getEntityByUniqueKey(email),

      async res => {
        if (res.error) return { error: res.error };
        user_id = res._id;
        const name = await server.model.getKeyCurrentValue({ _id: res._id }, 'name');
        const emailArgs = template({ token, email, language, name });
        return server.callMethod('sendEmail', emailArgs);
      },

      res => {
        if (res.error) return { error: res.error };
        return server.model.addAttrsToEntity({
          _id: user_id,
          attrs: { key: tokenField, value: token },
        });
      },

    ],

  };

};
