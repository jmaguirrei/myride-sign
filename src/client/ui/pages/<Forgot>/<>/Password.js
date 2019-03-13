export default (client, id) => {  const { Input } = client.ui.components;  const { TogglePassword } = client.ui.fragments;  return client.hoc({    id,    state(props, store) {      return {        password: store.get('forgot.password'),        isPasswordVisible: store.get('forgot.password.isVisible'),      };    },    actions(props, store) {      return {        onTextChanged: e => {          store.set({ 'forgot.password': e.target.value });        },      };    },    classes: {      wrapper: `        padding: 1px 10px;        position: relative;        display: flex;        align-items: center;      `,    },    render({ state, classes, actions, utils }) {      const { password, isPasswordVisible } = state;      return (        <div class={classes('wrapper')}>          <Input            type={isPasswordVisible ? 'text' : 'password'}            placeholder={utils.localize({ en: 'New Password', es: 'Nueva contraseña' })}            value={password}            onTextChanged={actions.onTextChanged}            autocomplete='new-password'          />          <TogglePassword page='forgot' inStyle='right: 20px'/>        </div>      );    }  });};