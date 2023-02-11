import { FC, Fragment } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";
import dayjs from "dayjs";
import { ru, enUS } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useTranslation } from "next-export-i18n";
import { Popover, Transition } from "@headlessui/react";
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
  let valueDate: Date | undefined;
  if (value) {
    // console.log(value);
    const dayjsDate = dayjs(value, "DD/MM/YYYY");
    // console.log(dayjsDate);
    valueDate = dayjsDate.toDate();
    // console.log(valueDate);
  } else {
    valueDate = undefined;
  }
  const { t } = useTranslation();
  // const classNames: ClassNames = {
  //   ...styles,
  //   day_selected: "bg-red-300",
  // };
  return (
    <div>
      {/* <div>{JSON.stringify(value)}</div> */}
      <label className="block">{name}*:</label>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`px-2 py-1 bg-[#544761] rounded-full w-96 text-left ${
                !value ? "text-zinc-400" : "text-white"
              }`}
            >
              {value || "01/01/2001"}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#544761]">
                  <DayPicker
                    locale={t("locale") === "en" ? enUS : ru}
                    // classNames={classNames}
                    showOutsideDays
                    fromYear={1980}
                    toYear={2022}
                    selected={valueDate}
                    captionLayout="dropdown"
                    onSelect={(day) => {
                      // console.log(date);
                      if (!day) {
                        setValue(slug, null, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                        return;
                      }
                      const formatted = dayjs(day).format("DD/MM/YYYY");
                      // console.log(formatted);
                      //   console.log(formatted);
                      setValue(slug, formatted, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    }}
                    mode="single"
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div className="h-6">
        {errors[slug] && (
          <span className="text-red-400 text-sm">
            *{errorText || t("form.errorDefault")}
          </span>
        )}
      </div>
    </div>
  );
};
export default DateField;
