/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import TheRestouranSource from '../../data/restourant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
    <div class="posts">

    </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestouranSource.detailResto(url.id);
    const restoContainer = document.querySelector('.posts');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
    console.log(resto.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto : FavoriteRestoIdb,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
      },
    });
  },
};

export default Detail;
