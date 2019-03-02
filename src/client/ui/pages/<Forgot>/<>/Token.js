export default (client, id) => {  const { Input } = client.ui.components;  return client.hoc({    id,    state(props, store) {      return {        tokenDigits: store.get('forgot.tokenDigits'),      };    },    actions(props, store) {      return {        onTextChanged: e => {          const value = e.target.value;          if (value.length <= 6) store.set({ 'forgot.tokenDigits': value });        },      };    },    styles: {      wrapper: `        padding: 5px 10px;        position: relative;        display: flex;        flex-flow: column;        align-items: center;        justify-content: center;        height: 100%;      `,      title: `        font-size: 20px;        padding: 10px 20px;      `,    },    render({ state, styles, actions, utils }) {      const { tokenDigits } = state;      return (        <div style={styles.wrapper}>          <div style={styles.title}>            {              utils.localize({                en: 'Enter the code received by email',                es: 'Ingresa el código recibido por email',              })            }          </div>          <Input {...{            type: 'tel',            placeholder: '* * * * * *',            value: tokenDigits,            onTextChanged: actions.onTextChanged,            inStyle: `              padding: 12px 18px;              width: 70%;              font-size: 24px;              line-height: 24px;              text-align: center;            `,          }}/>        </div>      );    }  });};