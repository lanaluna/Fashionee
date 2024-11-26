export const goods = document.getElementById('goods-list'); //сюда выводим список
export const itemsPerPage = 9; // число товаров на 1 странице

export const paginator = {
    target: document.getElementById('paginator'),
    paginatorButtonPrev: undefined,
    paginatorButtonNext: undefined,
    paginatorButtons: []
}

export const goodsObject = {
    amountOfPages: undefined,
    amountOfProducts: undefined,
    currentPage: 1,
    products: [],

};

