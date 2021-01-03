/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestouranSource {
  static async nowList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }
}

export default TheRestouranSource;
