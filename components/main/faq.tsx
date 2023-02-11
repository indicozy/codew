import { Disclosure, Transition } from "@headlessui/react";
import { IconChevronUp } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
import { FC, Fragment } from "react";
import { ComponentAnchor } from "../componentAnchor";
import BackgroundImage from "../ui/backgroundImage";
import Container from "../ui/container";
import { Headline } from "../ui/headline";

type TypeQuestion = { q: string; a: string };

export function Faq() {
  const { t } = useTranslation();
  const questions = t("faq.questions");
  const Question: FC<{ question: TypeQuestion }> = ({ question: { q, a } }) => (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-xl bg-zinc-800 px-4 py-2 text-left text-xl font-medium text-zinc-100 hover:bg-default hover:bg-opacity-60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 duration-150">
              <span>{q}</span>
              <IconChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-zinc-200`}
              />
            </Disclosure.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-zinc-300 bg-zinc-900 rounded-lg mt-4">
                {a}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
  return (
    <>
      <ComponentAnchor id="faq">
        <Container>
          <Headline>{t("faq.headline")}</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {questions.map((question: TypeQuestion, i: number) => (
              <Question key={i} question={question} />
            ))}
          </div>
        </Container>
      </ComponentAnchor>
    </>
  );
}
