/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
const DrawerInitiator = {
  init({ menu, nav }) {
    menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });
    
    nav.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },
    
  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};
    
export default DrawerInitiator;
