Feature('Liking Resto');

Before((I) => {
     I.amOnPage('/');

   });

   Scenario('liking one movie', async (I) => {
   
     
     I.seeElement('.post-item__title a');

     
     const firstResto = locate('.post-item__title a').first();
     I.click(firstResto);
   
     I.seeElement('#likeButton');
     I.click('#likeButton');
   
     I.amOnPage('/#/favorite');
   });

   Scenario('unliking one movie', async (I) => {
   
     
     I.seeElement('.post-item__title a');

     
     const firstResto = locate('.post-item__title a').first();
     I.click(firstResto);
   
     I.seeElement('#likeButton');
     I.click('#likeButton');
   
     I.amOnPage('/#/favorite');

     I.seeElement('.post-item__title a');

     
     const secondResto = locate('.post-item__title a').first();
     I.click(secondResto);
   
     I.seeElement('#likeButton');
     I.click('#likeButton');

     I.amOnPage('/#/favorite');
     I.amOnPage('/');

   });