/* eslint-disable linebreak-style */
import TheRestouranSource from '../../data/restourant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
       <div class="posts">

       </div>

       `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const list = await TheRestouranSource.nowList();
    const restoContainer = document.querySelector('.posts');
    list.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    console.log(list);
  },
};

export default Home;
