import createUIElement from "./createUIElement"

const Option = (id, textContent, classNames = "", attributes = {}) => {
    attributes.id = id;
    attributes.textContent = textContent ? textContent : "-- Select --";
    attributes.class = classNames ? `option ${classNames}` : "option";
    const option = createUIElement("option", attributes);
    return option;
}

export default Option;