

export default (client, id) => {

  const { Icons } = client.ui.components;

  const apiFB = (path, options) => new Promise((resolve, reject) => {
    window.FB.api(path, 'GET', options, response => {
      if (!response) reject();
      resolve(response);
    });
  });

  const userOptions = { fields: 'first_name, last_name, name, email' };
  const pictureOptions = { width: 720, height: 720, redirect: false };

  return client.hoc({

    id,

    actions(props) {
      return {
        onclick: () => {
          window.FB.getLoginStatus(response => {
            if (response.status === 'connected') {
              apiFB('/me', userOptions)
              .then(userInfo => {
                // const facebookUserId = response.authResponse.userID;
                props.signinWithFacebook({ email: userInfo.email });
              });
            } else {
              window.FB.login(() => {
                Promise.all([
                  apiFB('/me', userOptions),
                  apiFB('/me/picture', pictureOptions),
                ])
                .then(res => {
                  const [ userInfo, pictureInfo ] = res;
                  const { email, name, id: facebookUserId } = userInfo;
                  const { width, height, url } = pictureInfo.data;
                  props.signupWithFacebook({
                    facebookUserId,
                    name,
                    email,
                    picture: { width, height, url },
                  });
                })
                .catch(console.log);
              }, { scope: 'email' });
            }
          });
        },
      };
    },

    mounted(props) {

      window.fbAsyncInit = () => {
        window.FB.init({
          appId: props.facebookAppId,
          cookie: true,
          xfbml: true,
          version: 'v3.2',
        });

        window.FB.AppEvents.logPageView();
      };

      client.createScript('facebook-jssdk', 'https://connect.facebook.net/en_US/sdk.js');

    },

    classes: {
      wrapper: `
        position: relative;
        background-color: ${client.lib.Colors.BLUE_FACEBOOK};
        border-radius: 7px;
        color: white;
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
      `,
      text: `
        padding: 10px;
        font-size: 18px;
        text-align: center;
        width: 100%;
      `,
    },

    render({ props, classes, actions }) {

      return (
        <div
          onclick={actions.onclick}
          class={classes('wrapper')}
        >
          <Icons
            icon='facebook'
            size={30}
            inStyle='position: absolute; right: 12px; bottom: 9px;'
          />
          <div class={classes('text')}>{props.text}</div>
        </div>
      );
    }

  });

};

