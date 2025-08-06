import createUIElement from "./createUIElement";
import Option from "./option";

const Select = (id, classNames = "", attributes = {}, children = []) => {
    attributes.id = id;
    attributes.class = classNames ? `select ${classNames}` : "select";
    const defaultOption = Option("default");
    children.push(defaultOption);
    const select = createUIElement("select", attributes, children);
    return select;
}

export default Select;