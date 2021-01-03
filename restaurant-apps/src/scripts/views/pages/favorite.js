/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="posts">

    </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.posts');
    resto.forEach((rest) => {
      restoContainer.innerHTML += createRestoItemTemplate(rest);
    });
  },
};

export default Favorite;
