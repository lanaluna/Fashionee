import { createHTMLElement } from "/scripts/createHTMLElement";
import { showPageN } from "/scripts/showPageN";
import { paginator } from "/scripts/variables";


export function createPaginator(numberOfPage) {
    const ul = createHTMLElement('ul', ['paginator__list']);

    const liPrev = createHTMLElement('li', ['paginator__prev']);
    paginator.paginatorButtonPrev = createHTMLElement('button');
    paginator.paginatorButtonPrev.disabled = true;
    paginator.paginatorButtonPrev.dataset.page = 'prev';
    paginator.paginatorButtonPrev.innerHTML = ' <svg width="51" height="12" aria-hidden="true" focusable="false"><use href="svg-sprite.svg#arrow"></use></svg>';
    paginator.paginatorButtonPrev.addEventListener('click', showPageN); //добавляем управление кнопками стрелками пагинатора
    liPrev.append(paginator.paginatorButtonPrev);
    ul.append(liPrev);

    const liNext = createHTMLElement('li', ['paginator__next']);
    paginator.paginatorButtonNext = createHTMLElement('button');
    paginator.paginatorButtonNext.dataset.page = 'next';
    paginator.paginatorButtonNext.innerHTML = ' <svg width="51" height="12" aria-hidden="true" focusable="false"><use href="svg-sprite.svg#arrow"></use></svg>';
    paginator.paginatorButtonNext.addEventListener('click', showPageN); //добавляем управление кнопками стрелками пагинатора
    liNext.append(paginator.paginatorButtonNext);

    for (let i = 0;  i < numberOfPage; i++) {
        const li = createHTMLElement('li', ['paginator__item']);
        paginator.paginatorButtons[i] = createHTMLElement('button');
        paginator.paginatorButtons[i].dataset.page = i + 1;
        paginator.paginatorButtons[i].innerText = i + 1;
        paginator.paginatorButtons[i].addEventListener('click', showPageN); //добавляем управление кнопками пагинатора с цифрами
        if (i === 0) paginator.paginatorButtons[i].disabled = true;
        li.append(paginator.paginatorButtons[i]);
        ul.append(li);
    }

    ul.append(liNext);


    return ul;
}

