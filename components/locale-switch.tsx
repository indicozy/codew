const locales = ["en", "ru", "kz"];

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IconChevronDown } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";

const Locales = ({ localeNow }: { localeNow: string }) => {
  const router = useRouter();

  const updateLanguage = (value: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { lang: value },
      },
      undefined,
      { shallow: false }
    );
  };

  return (
    <>
      {locales.map((locale, i) => {
        if (locale === localeNow) {
          return <></>;
        }

        return (
          <Menu.Item key={i}>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-default text-white" : "text-white"
                } flex uppercase  w-full items-center rounded-xl px-2 py-2`}
                onClick={() => updateLanguage(locale)}
              >
                {locale}
              </button>
            )}
          </Menu.Item>
        );
      })}
    </>
  );
};

export function LocaleSwitch() {
  const { t } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="uppercase inline-flex items-center w-full justify-center rounded-full bg-default px-4 py-2 text-base font-bold text-white hover:text-rose-100 hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-mont">
          {t("locale")}
          <IconChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 left-0 mt-2 origin-top divide-y divide-gray-700 rounded-xl bg-zinc-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Locales localeNow={t("locale")} />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
