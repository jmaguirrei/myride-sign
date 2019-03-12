export default (client, id) => {  const { RootControl } = client.lib;  const { MenuIcon } = client.ui.components;  const { Pages, Header, Menu } = client.ui.fragments;  const { SignIn, SignUp, Welcome, Forgot } = client.ui.pages;  return client.hoc({    id,    state(props, store) {      return {        currentPage: store.get('currentPage') || props.currentPage,        isMenuOpen: store.get('isMenuOpen'),        menuOptions: RootControl(store).menuOptions,      };    },    actions(props, store) {      return {        onClickMenu: () => {          store.toggle('isMenuOpen');        },      };    },    classes: {      root: `        position: relative;        height: 100%;        width: 100%;        background: ${client.lib.Colors.GREY_DARK};      `,    },    render({ actions, state, classes }) {      const { onClickMenu } = actions;      const { currentPage, isMenuOpen, menuOptions } = state;      return (        <div id='root' class={classes('root', 'safe-area')}>          <MenuIcon            isOpen={isMenuOpen}            onClick={onClickMenu}            color='white'            inStyle='left: 12px; top: 12px;'          />          <Header            isMenuOpen={isMenuOpen}            logoSrc={client.lib.Paths.LOGO_LIGHT}          />          <Menu            isMenuOpen={isMenuOpen}            logoSrc={client.lib.Paths.LOGO_LIGHT}            options={menuOptions}          />          <Pages            currentPage={currentPage}            pages={{              signin: SignIn,              signup: SignUp,              forgot: Forgot,              welcome: Welcome,            }}          />        </div>      );    }  });};