import { FC } from "react";

const NumberField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
}> = ({ errors, register, name, slug, validation, errorText }) => {
  return (
    <div>
      <label className="block">{name}: </label>
      <input
        type="number"
        className="bg-[#544761] text-[#DAD9D9] rounded-full px-2 py-1 font-mont block"
        {...register(slug, validation)}
      />
      <div className="h-4">
        {errors[slug] && (
          <span className="text-red-400 text-sm">
            {errorText || "*This field is required"}
          </span>
        )}
      </div>
    </div>
  );
};
export default NumberField;
