import createUIElement from './createUIElement';

const Button = (
    type: string = 'button',
    textContent: string = '',
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
    children: HTMLElement[] = [],
) => {
    attributes.type = type;
    attributes.textContent = textContent;
    attributes.class = classNames ? `button ${classNames}` : 'button';

    const button = createUIElement('button', attributes, children);

    return button;
};

export default Button;
