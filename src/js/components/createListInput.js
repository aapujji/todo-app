import createUIElement from "../utils/createUIElement";

export const listInput = () => {
    const input = createUIElement("input", {
        type: "text",
        id: "newListInput",
        name: "newListInput",
        class: "input new-list-input",
    });
    return input;
}