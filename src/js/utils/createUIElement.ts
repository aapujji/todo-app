const createUIElement = (
    tag: string = 'div',
    attributes: Record<string, string | number | boolean> = {},
    children: HTMLElement[] = [],
): HTMLElement => {
    const elem = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        if (key in elem) {
            (elem as Record<string, any>)[key] = value;
        } else {
            elem.setAttribute(key, String(value));
        }
    });
    if (children) {
        children.map((childElem) => elem.appendChild(childElem));
    }
    return elem;
};

export default createUIElement;
