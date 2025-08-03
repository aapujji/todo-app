import createUIElement from "../utils/createUIElement"

export const createEditableDiv = () => {
    const editableDiv = createUIElement("div", {
        class: "editable todo-input",
        contenteditable: true,
    });
    return editableDiv;
}