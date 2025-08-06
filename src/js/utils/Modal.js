import createUIElement from "./createUIElement";

const Modal = (id, classNames = "", attributes = {}, children = []) => {
    attributes.id = id;
    attributes.class = classNames ? `modal ${classNames}` : "modal";
    
    const modal = createUIElement("div", attributes, children);
    
    return modal;
}

export default Modal;