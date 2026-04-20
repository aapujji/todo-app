import Input from './Input';

const Checkbox = (
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
) => {
    classNames = classNames ? `checkbox ${classNames}` : 'checkbox';
    attributes.checked = attributes.checked || false;

    const checkbox = Input('checkbox', classNames, attributes);

    return checkbox;
};

export default Checkbox;
