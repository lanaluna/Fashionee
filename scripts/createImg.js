export function createImg(src, classNames = [], alt = '', loading = 'lazy') {
    const img = document.createElement('img');
    img.src = src;

    if (classNames) {
        for (let className of classNames) {
            img.classList.add(className);
        }
    }

    img.alt = alt;
    img.loading = loading;

    return img;
}
