import createUIElement from "./createUIElement";

const Button = (type = "button", textContent = "", classNames = "", attributes = {}, children = []) => {
    attributes.type = type;
    attributes.textContent = textContent;
    attributes.class = classNames ? `button ${classNames}` : "button";

    const button = createUIElement("button", attributes, children);
    
    return button;
}

export default Button;