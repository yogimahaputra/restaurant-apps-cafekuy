/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


const createRestoItemTemplate = (resto) => `
<article class="post-item">

     <img class="post-item__thumbnail lazyload"
     width="20%"
     data-src=${CONFIG.BASE_IMAGE_URL
          + resto.pictureId}
     alt="Gambar gedung merah">
     <div class="post-item__content">
          <p class="post-item__date">ID: ${resto.id} 
          <a href="#" class="post-item__date__author" >Rating : ${resto.rating} </a>
          </p>
          <h1 class="post-item__title"><a style="" href="${`/#/detail/${resto.id}`}">${resto.name}</a> <small>| ${resto.city}</small></h1>
          <p class="post-item__description">${resto.description}</p>
     </div>
</article>

  `;

const createRestoDetailTemplate = (resto) => `
     <img class="post-item__thumbnail "
     width="100%"
     src=${CONFIG.BASE_IMAGE_URL + resto.pictureId}
     alt="Gambar gedung merah">
     <div class="post-item__content">
          <p class="post-item__date">ID: ${resto.id} 
          <a href="#" class="post-item__date__author" >Rating : ${resto.rating} </a>
          </p>
          <br>
          <p class="post-item__date">Kategori : ${resto.categories.map((katego) => katego.name).join(', ')}
          <p class="post-item__date">Alamat : ${resto.address}</p>
          <h1 class="post-item__title"><a href="#">${resto.name}</a> <small>| ${resto.city}</small></h1>
          <br>
 
          <p class="post-item__description">${resto.description}</p>
     </div>
     <div>
     <h1 style="color: #603F2D;">MENU :</h1>
     <br>
     <h1 class="post-item__title" ><b>MAKANAN</b</h1>
     <p class="post-item__description"  style="margin-top: 2px; font-weight: 100;">${resto.menus.foods.map((food) => food.name).join(', ')} </p>
     <br>
     <h1 class="post-item__title" ><b>MINUMAN</b</h1>
     <p class="post-item__description" style="margin-top: 2px; font-weight: 100;">${resto.menus.drinks.map((drink) => drink.name).join(', ')} </p>
     
     <br>
     <h2 style="color: #603F2D;">REVIEW :</h2>
     <br>
 
     <p class="post-item__date">${resto.customerReviews[0].date}</p>
     <h1 class="post-item__title"  style="margin-top: 4px;">${resto.customerReviews[0].name} : "${resto.customerReviews[0].review}"</h1>
     </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnLikeRestoButtonTemplate,
};
