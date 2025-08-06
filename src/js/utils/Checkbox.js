import Input from './Input';

const Checkbox = (classNames = "", attributes = {}) => {
    classNames = classNames ? `checkbox ${classNames}` : "checkbox";
    attributes.checked = attributes.checked || false;
    
    const checkbox = Input("checkbox", classNames, attributes);

    return checkbox;
}

export default Checkbox;