import { FC, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const DateField: FC<{
  errors: any;
  setValue: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
  variants: string[];
  defaultText: string;
  register: any;
  value?: string;
}> = ({
  errors,
  register,
  name,
  slug,
  validation,
  errorText,
  value,
  setValue,
}) => {
  register(slug, validation);
  let valueDate;
  if (value) {
    valueDate = dayjs(value, "DD/MM/YYYY").toDate();
  } else {
    valueDate = null;
  }
  return (
    <div>
      <div>lol{JSON.stringify(undefined)}</div>
      <label className="block">{name}: </label>
      {JSON.stringify(valueDate)}
      <DatePicker
        selected={valueDate}
        onChange={(date: Date) =>
          setValue(slug, dayjs(date).format("DD/MM/YYYY"))
        }
      />
      <div className="h-6">
        {errors[slug] && (
          <span className="text-red-400 text-sm">
            {errorText || "*This field is required"}
          </span>
        )}
      </div>
    </div>
  );
};
export default DateField;
