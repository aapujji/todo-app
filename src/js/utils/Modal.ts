import createUIElement from './createUIElement';

const Modal = (
    id: string,
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
    children: HTMLElement[] = [],
) => {
    attributes.id = id;
    attributes.class = classNames ? `modal ${classNames}` : 'modal';

    const modal = createUIElement('div', attributes, children);

    return modal;
};

export default Modal;
