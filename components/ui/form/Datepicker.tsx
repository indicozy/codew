import { FC, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
}> = ({ errors, register, name, slug, validation, errorText }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div>
        <label className="block">{name}: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </>
  );
};
export default DateField;
