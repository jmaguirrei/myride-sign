export default store => ({ facebookUserId, name, email, picture }) => {  const language = store.get('language');  return {    steps: [      () => {        return store.callServer('signupWithFacebook', {          language,          name,          email,          facebookUserId,          facebookUserPic: picture,        });      },      res => {        return store.route('app', `?user=${res._id}`);      },    ],  };};