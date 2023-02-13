import { useTranslation } from "next-export-i18n";
import { FC } from "react";

const TextField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
  warningText?: string;
}> = ({ errors, register, name, slug, validation, errorText, warningText }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[24rem]">
      <label className="block">{name}*: </label>
      <input
        className="bg-[#544761] text-[#DAD9D9] rounded-full px-2 py-1 font-mont block w-full"
        type="text"
        {...register(slug, validation)}
      />
      {warningText ? (
        <div className="text-xs text-gray-400">{warningText}</div>
      ) : (
        <></>
      )}
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
export default TextField;
