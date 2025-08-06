const createUIElement = (tag = "div", attributes = {}, children = []) => {
    const elem = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        if (key in elem) {
            elem[key] = value;
        } else {
            elem.setAttribute(key,value);
        }
    });
    if (children) {
        children.map((childElem) => elem.appendChild(childElem));
    }
    return elem;
}

export default createUIElement;