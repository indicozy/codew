import { FC } from "react";

const TextAreaField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
}> = ({ errors, register, name, slug, validation, errorText }) => {
  return (
    <div>
      <label className="block text-center text-2xl font-medium">
        {name}*:{" "}
      </label>
      <div className="italic text-center text-lg">*minimum 100 words*</div>
      <textarea
        className=" bg-[#544761] text-[#DAD9D9] rounded-xl font-mont block max-w-5xl w-full mx-auto p-2"
        rows={8}
        {...register(slug, validation)}
      />
      <div className="h-8 text-center">
        {errors[slug] && (
          <span className="text-red-400 text-sm">
            {errorText || "*This field is required"}
          </span>
        )}
      </div>
    </div>
  );
};
export default TextAreaField;
