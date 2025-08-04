import createUIElement from "../utils/createUIElement";

export const createLink = (list) => { 
    const listButton = createUIElement("button", {
        class: "list-link", 
        textContent: list.title,
        "data-uuid": list.id,
    });
    const listLi = createUIElement("li", {
        class: "list-item",
    }, [
        listButton
    ]);
    return listLi;
};