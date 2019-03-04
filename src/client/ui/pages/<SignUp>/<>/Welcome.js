export default (client, id) => {  return client.hoc({    id,    classes: {      wrapper: `        display: flex;        flex-flow: column;        height: 100%;        justify-content: center;        align-items: center;      `,      title: `        font-size: 26px;        padding: 20px;      `,      subtitle: `        font-size: 20px;        color: hsl(0, 0%, 35%);      `,    },    render({ classes, utils }) {      return (        <div id='welcome' style={classes('wrapper')}>          <div class={classes('title')}>            {              utils.localize({                en: 'Welcome! 🎉🎉',                es: '¡Bienvenid@! 🎉🎉',              })            }          </div>          <div class={classes('subtitle')}>            {              utils.localize({                en: 'You successfully registered your account',                es: 'Has registrado exitosamente tu cuenta',              })            }          </div>        </div>      );    }  });};