import createUIElement from './createUIElement';

const Label = (
    id: string,
    labelFor: string,
    textContent: string,
    classNames: string = '',
    attribtues: Record<string, string | number | boolean> = {},
    children: HTMLElement[] = [],
) => {
    attribtues.id = id;
    attribtues.for = labelFor;
    attribtues.textContent = textContent;
    attribtues.class = classNames ? `label ${classNames}` : 'label';

    const label = createUIElement('label', attribtues, children);

    return label;
};

export default Label;
