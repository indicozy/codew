import { FC } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IconArrowsMoveVertical, IconCheck } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Dropdown: FC<{
  errors: any;
  setValue: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
  variants: string[];
  defaultText: string;
  register: any;
  selected?: string;
}> = ({
  errors,
  setValue,
  name,
  slug,
  validation,
  selected,
  variants,
  register,
  errorText,
  defaultText,
}) => {
  const setSelected = (value: string) => {
    setValue(slug, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  register(slug, validation);
  const { t } = useTranslation();
  return (
    <div className="my-2">
      <label className="block">{name}*:</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-96">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#544761] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected || defaultText}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IconArrowsMoveVertical
                className="h-5 w-5 text-[#DAD9D9]"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded-md bg-[#544761] text-[#DAD9D9] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {variants.map((variant, variantIdx) => (
                <Listbox.Option
                  key={variantIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-default text-white" : "text-violet-100"
                    }`
                  }
                  value={variant}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {variant}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <IconCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
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
export default Dropdown;
