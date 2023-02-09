import { useTranslation } from "next-export-i18n";
import { FC } from "react";
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
      <div className="text-2xl font-semibold font-mont">{q}</div>
      <div className="text-base">{a}</div>
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
