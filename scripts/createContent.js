import {createProductList} from '/scripts/createProductList.js';

fetch('./products.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Ой, ошибка в fetch: ' + response.statusText);
  }
  return response.json();
})
.then(jsonData => createProductList(jsonData))
.catch(error => console.error('Не получилось вывести список товаров: ', error));




