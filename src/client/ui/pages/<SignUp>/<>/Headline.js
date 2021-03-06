export default (client, id) => {  const { Icons } = client.ui.components;  return client.hoc({    id,    classes: {      container: `        display: flex;        align-items: center;      `,      title: `        width: 100%;        padding: 10px;        font-size: 20px;        display: flex;        align-items: center;        justify-content: center;      `,    },    render({ classes, utils }) {      return (        <div id='signup-headline' class={classes('container')}>          <Icons            icon='signup'            size={30}            inStyle={`              position: absolute;              left: 15px;              padding: 3px;              border: 1px solid hsl(0, 0%, 85%);              border-radius: 7px;              fill: ${client.lib.Colors.GREEN_SIGNUP};            `}          />          <div class={classes('title')}>            {              utils.localize({                en: 'Account registration',                es: 'Registro de tu cuenta',              })            }          </div>        </div>      );    }  });};