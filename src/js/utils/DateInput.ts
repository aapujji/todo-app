import Input from './Input';

const DateInput = (
    id: string,
    classNames: string = '',
    attributes: Record<string, string | number | boolean> = {},
) => {
    classNames = classNames ? `date ${classNames}` : 'date';

    const dateInput = Input('date', classNames, attributes);

    return dateInput;
};

export default DateInput;
