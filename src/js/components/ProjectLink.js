import createUIElement from "../utils/createUIElement";
import Button from "../utils/Button";
import deleteIcon from "../../images/xmark.svg";

export const ProjectLink = (project) => { 
    const projectButton = Button("button", project, "project-link transparent");
    const deleteImg = createUIElement("img",{
        class: "icon delete-project",
        src: deleteIcon,
        alt: "delete project",
    });
    const deleteProjectButton = Button("button", "", "delete-project", {}, [deleteImg]);
    const projectLi = createUIElement("li", {
        class: "list-item",
        "data-id": project.split(" ").join("-"),
    }, [
        projectButton,
    ]);
    if (project !== "default") {
        projectLi.appendChild(deleteProjectButton);
    }
    return projectLi;
};