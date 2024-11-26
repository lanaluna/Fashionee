export function createHTMLElement(tag, classNames = [], dataAttrObject = {}) {
    const el = document.createElement(tag);

    if (classNames) {
        for (let className of classNames) {
            el.classList.add(className);
        }
    }

    if (dataAttrObject) {
        for (let attr in dataAttrObject) {
            el.dataset[attr] = dataAttrObject[attr];
        }
    }

    return el;
}