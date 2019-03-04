

export default (client, id) => {

  const { Icons } = client.ui.components;

  return client.hoc({

    id,

    actions(props, store) {
      return {
        onclick: () => store.toggle(`${props.page}.password.isVisible`),
      };
    },

    state(props, store) {
      return {
        isPasswordVisible: store.get(`${props.page}.password.isVisible`),
        isIconVisible: store.get(`${props.page}.password`).length > 0,
      };
    },

    styles: {
      icon: (isVisible, inStyle) => `
        position: absolute;
        right: 10px;
        opacity: ${isVisible ? 1 : 0};
        pointer-events: ${isVisible ? 'auto' : 'none'};
        ${inStyle}
      `,
    },

    render({ props, state, actions, styles }) {

      const { isPasswordVisible, isIconVisible } = state;
      const { inStyle = '' } = props;

      return (
        <Icons
          icon={isPasswordVisible ? 'eyeOff' : 'eyeOn'}
          size={22}
          onclick={isIconVisible ? actions.onclick : () => undefined}
          inStyle={styles.icon(isIconVisible, inStyle)}
        />
      );
    }

  });

};
