import { FC, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { ru } from "date-fns/locale";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

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
    console.log(value);
    const dayjsDate = dayjs(value, "DD/MM/YYYY");
    console.log(dayjsDate);
    valueDate = dayjsDate.toDate();
    console.log(valueDate);
  } else {
    valueDate = null;
  }
  return (
    <div>
      <div>{JSON.stringify(value)}</div>
      <label className="block">{name}: </label>
      {JSON.stringify(valueDate)}
      <DatePicker
        selected={valueDate}
        locale={ru}
        dateFormat="dd MMMM yyyy"
        // format="dd/MM/yyyy"
        onChange={(date: Date | null) => {
          console.log(date);
          if (!date) {
            setValue(slug, null, {
              shouldValidate: true,
              shouldDirty: true,
            });
            return;
          }
          const formatted = dayjs(date).format("DD/MM/YYYY");
          console.log(formatted);
          //   console.log(formatted);
          setValue(slug, formatted, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
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
