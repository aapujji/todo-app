
import Input from './Input';

const DateInput = (id, classNames = "", attributes = {}) => {
    classNames = classNames ? `date ${classNames}` : "date";

    const dateInput = Input("date", classNames, attributes);

    return dateInput;
}

export default DateInput;