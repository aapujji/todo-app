import createUIElement from './createUIElement';
import Option from './Option';

const Select = (
    id: string,
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
    children: HTMLElement[] = [],
) => {
    attributes.id = id;
    attributes.class = classNames ? `select ${classNames}` : 'select';
    const defaultOption = Option('default');
    children.push(defaultOption);
    const select = createUIElement('select', attributes, children);
    return select;
};

export default Select;
