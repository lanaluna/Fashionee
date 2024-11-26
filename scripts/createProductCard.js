import { createHTMLElement } from "/scripts/createHTMLElement.js";
import { createImg } from "/scripts/CreateImg.js";


export function createProductCard(product) {
    const card = createHTMLElement('li', ['goods__card']);
    card.dataset.id = product.id;

    const divImgWrapper = createHTMLElement('div', ['goods__img-wrapper']);
    card.append(divImgWrapper);

    const buttonFavorites = createHTMLElement('button', ['goods__to-favorites']);
    buttonFavorites.insertAdjacentHTML('afterbegin', '<svg width="19" height="18" aria-hidden="true" focusable="false" aria-label="Добавить в избранное"><use href="svg-sprite.svg#favorites"></use></svg>');
    divImgWrapper.append(buttonFavorites);
    

    const buttonClick = createHTMLElement('button', ['goods__click']);
    divImgWrapper.append(buttonClick);

    if (product.isSale) {
        const spanSale = createHTMLElement('span', ['goods__label', 'goods__label--sale']);
        spanSale.innerText = 'Sale';
        buttonClick.append(spanSale);
    }

    if (product.isNew) {
        const spanNew = createHTMLElement('span', ['goods__label', 'goods__label--new']);
        spanNew.innerText = 'New';
        buttonClick.append(spanNew);
    }

    const img = createImg(product.image, null, product.name);
    buttonClick.append(img);
         

    const divDescription = createHTMLElement('div', ['goods__description']);
    card.append(divDescription);

    const divName = createHTMLElement('div', ['goods__name']);
    divName.innerText = product.name;
    divDescription.append(divName);

    const spanPrice = createHTMLElement('span', ['goods__price']);
    spanPrice.innerText = product.price;
    divDescription.append(spanPrice);

    if (product.oldPrice) {
        const spanOldPrice = createHTMLElement('span', ['goods__old-price']);
        spanOldPrice.innerText = product.oldPrice;
        divDescription.append(spanOldPrice);
    }
    return card;
  }
