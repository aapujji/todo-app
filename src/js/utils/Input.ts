import createUIElement from './createUIElement';

const Input = (
    type: string = 'text',
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
) => {
    attributes.type = type;
    attributes.class = classNames ? `input ${classNames}` : 'input';

    const input = createUIElement('input', attributes);

    return input;
};

export default Input;
