import createUIElement from "../utils/createUIElement"
import deleteIcon from "../../images/delete.svg";
import editIcon from "../../images/edit.svg";

const actions = [
    {
        name: "delete",
        icon: deleteIcon,
    },
    {
        name: "edit",
        icon: editIcon,
    }
]

export const actionsDropdown = () => {
    const dropdownList = createUIElement("ul", {
        class: "actions-list",
    });
    actions.map((action) => {
        const optionLi = createUIElement("li", {
            class: `action-link ${action.name}`,
        });
        const actionImage = createUIElement("img", {
            class: "icon",
            src: action.icon,
            alt: action.name,
        })
        const actionSpan = createUIElement("span", {
            class: `action-text ${action.name}`,
            textContent: action.name,
        })
        optionLi.appendChild(actionImage);
        optionLi.appendChild(actionSpan);
        dropdownList.appendChild(optionLi);
    });

    const actionsDiv = createUIElement("div", {
        class: "actions-container hide",
    },[
        dropdownList,
    ]);
    return actionsDiv;
}