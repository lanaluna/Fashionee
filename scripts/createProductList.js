import { createHTMLElement } from '/scripts/createHTMLElement.js';
import { createPaginator } from '/scripts/createPaginator.js';
import { createProductCard } from '/scripts/createProductCard.js';
import { goods, itemsPerPage, paginator, goodsObject } from '/scripts/variables.js';

export function createProductList(products) {
    //products это массив
    goodsObject.products = products;
    goodsObject.amountOfProducts = products.length; //общее число товаров, нужно для определения сколько страниц будет

    const goodsUL = createHTMLElement('ul', ['goods__cards-list']); // это список для 1 страницы
    goodsUL.dataset.page = 1;

    //выводим по 9 элементов (itemsPerPage)
    //определим сколько страничек будет
    goodsObject.amountOfPages = Math.ceil(goodsObject.amountOfProducts / itemsPerPage);

    if (goodsObject.amountOfPages > 1) {
        //нам нужна листалка
        paginator.target.append(createPaginator(goodsObject.amountOfPages));

        //выводим товары для первой странички
        for (let i = 0;  i < itemsPerPage; i++) {
            goodsUL.append(createProductCard(products[i]));
        }
    } else {
        //все влезло в 1 страницу, просто выводим товары
        for (let product of products) {
            goodsUL.append(createProductCard(product));
        }
    }

    goods.append(goodsUL);

  }