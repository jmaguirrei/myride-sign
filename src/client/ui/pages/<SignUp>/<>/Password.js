export default (client, id) => {  const { Input } = client.ui.components;  const { TogglePassword } = client.ui.fragments;  return client.hoc({    id,    state(props, store) {      return {        password: store.get('signup.password'),        isPasswordVisible: store.get('signup.password.isVisible'),      };    },    actions(props, store) {      return {        onTextChanged: e => {          store.set({ 'signup.password': e.target.value });        },      };    },    classes: {      wrapper: `        padding: 5px 10px;        position: relative;        display: flex;        align-items: center;      `,    },    render({ state, classes, actions }) {      const { password, isPasswordVisible } = state;      return (        <div class={classes('wrapper')}>          <Input            type={isPasswordVisible ? 'text' : 'password'}            placeholder='Password'            value={password}            onTextChanged={actions.onTextChanged}            autocomplete='new-password'          />          <TogglePassword page='signup' inStyle='right: 20px'/>        </div>      );    }  });};