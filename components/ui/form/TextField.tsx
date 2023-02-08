import { useTranslation } from "next-export-i18n";
import { FC } from "react";

const TextField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
}> = ({ errors, register, name, slug, validation, errorText }) => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block">{name}*: </label>
      <input
        className="bg-[#544761] text-[#DAD9D9] rounded-full px-2 py-1 font-mont block w-96"
        type="text"
        {...register(slug, validation)}
      />
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
