import createUIElement from './createUIElement';

const Option = (
    textContent: string,
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
): HTMLOptionElement => {
    attributes.textContent = textContent ? textContent : '-- Select --';
    attributes.class = classNames ? `option ${classNames}` : 'option';
    const option = createUIElement('option', attributes) as HTMLOptionElement;
    return option;
};

export default Option;
