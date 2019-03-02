
export const signupWithFacebook = (args, server) => {

  const {
    language, // ----------------> TODO: Send Welcome Email
    name,
    email,
    facebookUserId,
    facebookUserPic, // url, width, height
  } = args;

  let _id = server.uid();

  return {

    steps: [

      () => server.model.getEntityByUniqueKey(email),

      res => {
        if (!res) {
          return server.model.createEntity({
            _id,
            uniqueKey: email,
            domain: ':users',
            user_id: _id,
            attrs: {
              name,
              email,
              facebookUserId,
              facebookUserPic,
              isFBRegistered: true,
            },
          });
        }

        // Use the _id already created and add Facebook fields
        _id = res._id;
        return server.model.addAttrsToEntity({
          _id,
          attrs: [
            { key: 'name', value: name },
            { key: 'facebookUserId', value: facebookUserId },
            { key: 'facebookUserPic', value: facebookUserPic },
            { key: 'isFBRegistered', value: true },
          ],
        }, { onlyMissing: true });
      },

      () => ({ _id }),

    ],

  };

};
