import createUIElement from "./createUIElement"

const Option = (textContent, classNames = "", attributes = {}) => {
    attributes.textContent = textContent ? textContent : "-- Select --";
    attributes.class = classNames ? `option ${classNames}` : "option";
    const option = createUIElement("option", attributes);
    return option;
}

export default Option;