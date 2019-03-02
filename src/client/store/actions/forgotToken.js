export default store => () => {  const email = store.get('signin.email');  const password = store.get('forgot.password');  const token = store.get('forgot.tokenDigits');  return {    steps: [      () => {        store.set({ 'forgot.buttonPressed': true });        return store.callServer('setNewPassword', {          email,          password,          token,          tokenField: 'forgotToken',        });      },      res => {        if (res.error) {          store.set({            'forgot.tokenDigits': '',            'forgot.buttonPressed': false,          });          return store.addAlert({ name: res.error, timeout: 4000 });        }        return store.set({          'forgot.currentStep': 2,          'forgot.password': '',          'forgot.tokenDigits': '',          'forgot.buttonPressed': false,        });      },    ],  };};