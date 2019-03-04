

export default (client, id) => {

  return client.hoc({

    id,

    actions(props, store) {
      return {
        onclick: () => store.set({ currentPage: 'forgot' }),
      };
    },

    classes: {
      forgot: `
        padding: 5px 15px;
        font-size: 13px;
        user-select: none;
        flex: 1;
        opacity: 1;
        cursor: pointer;
      `,
    },

    render({ actions, classes, utils }) {

      return (
        <div class={classes('forgot')} onclick={actions.onclick}>
          {
            utils.localize({
              en: 'Forgot password?',
              es: '¿Olvidaste tu contraseña?',
            })
          }
        </div>
      );
    }

  });

};
