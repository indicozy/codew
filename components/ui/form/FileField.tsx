import { FC } from "react";

const FileField: FC<{
  errors: any;
  register: any;
  name: string;
  slug: string;
  validation: any;
  errorText?: string;
}> = ({ errors, register, name, slug, validation, errorText }) => {
  return (
    <div className="w-96 my-2">
      <label className="block">{name}: </label>
      <label className="block">
        <span className="sr-only">Choose File</span>
        <input
          type="file"
          className="w-full block text-sm bg-[#544761] text-[#DAD9D9] rounded-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-default file:text-white hover:file:bg-rose-600 pr-4"
          {...register(slug, validation)}
        />
      </label>
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
export default FileField;
