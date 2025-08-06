import createUIElement from "./createUIElement";

const Input = (type = "text", classNames = "", attributes = {}) => {
    attributes.type = type;
    attributes.class = classNames ? `input ${classNames}` : "input";

    const input = createUIElement("input", attributes);

    return input;
}

export default Input;