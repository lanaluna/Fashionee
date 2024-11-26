import { createHTMLElement } from "/scripts/createHTMLElement";
import { createProductCard } from '/scripts/createProductCard.js';
import { goods, itemsPerPage, paginator, goodsObject } from '/scripts/variables.js';


//функция непосредственно скрывает и показывает нужную страницу и дизейблит/делает активной цифровые кнопки пагинатора
function showPage__showhide (page) {
    document.querySelector('ul[data-page = "' + goodsObject.currentPage + '"').style.display = 'none'; //скрыли страницу, которая предъявлялась до этого
    paginator.paginatorButtons[goodsObject.currentPage - 1].disabled = false; //сделали активной кнопку пагинатора, который отображал страницу, которая предъявлялась до этого
    goodsObject.currentPage = Number(page);
    document.querySelector('ul[data-page = "' + page + '"').style.display = 'grid'; //показываем новую вкладку
    paginator.paginatorButtons[page - 1].disabled = true; //делаем неактивной кнопку пагинатора новой страницы
}

//функция проверяет и соответственно меняет кнопки-стрелки пагинатора (дизейблит или делает активными)
function controlPaginatorsArrows(newPage) {
    if (newPage <= 1) {
        paginator.paginatorButtonPrev.disabled = true;
        paginator.paginatorButtonNext.disabled = false;
    } else if (newPage >= goodsObject.amountOfPages) {
        paginator.paginatorButtonPrev.disabled = false;
        paginator.paginatorButtonNext.disabled = true;
    }
}

//функция решает, что показываем, что скрываем
export function showPageN (event) {
    let page; //страница на которую надо попасть

    //сначала проверяем, кликнул пользователь по цифре или по стрелке пагинатора
    if (event.currentTarget.dataset.page === 'next') {
        //это стрелка следующий
        page = goodsObject.currentPage + 1;
        
    } else if (event.currentTarget.dataset.page === 'prev') {
        //это стрелка предыдущий
        page = goodsObject.currentPage - 1;
    } else {
        //все остальное это цифры
        page = event.currentTarget.dataset.page; //забираем номер страницы из кнопки
    }

    //смотрим собрана ли уже нужная страница или нет
    if (document.querySelector('ul[data-page = "' + page + '"')) {
        //да, есть такая страница
        showPage__showhide(page);

    } else {
        //нет, такой страницы нет, сначала выводим товары для запрашиваемой странички (собираем ее)
        const goodsUL = createHTMLElement('ul', ['goods__cards-list']); // это список для 1 страницы
        goodsUL.dataset.page = page;
        for (let i = itemsPerPage * (page - 1);  i < itemsPerPage * page; i++) {
            if (goodsObject.products[i]) {
                goodsUL.append(createProductCard(goodsObject.products[i]));
            }
        }
        goods.append(goodsUL);

        showPage__showhide(page);
    }

    controlPaginatorsArrows(page);
}
