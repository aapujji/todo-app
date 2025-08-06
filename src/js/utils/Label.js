import createUIElement from "./createUIElement";

const Label = (id, labelFor, textContent, classNames = "", attribtues = {}, children = []) => {
    attribtues.id = id;
    attribtues.for = labelFor;
    attribtues.textContent = textContent;
    attribtues.class = classNames ? `label ${classNames}` : "label";
    
    const label = createUIElement("label", attribtues, children);
    
    return label;
}

export default Label;