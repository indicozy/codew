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
    <>
      <label className="block mb-2 text-sm font-medium text-white">
        {name}
      </label>
      <input
        className="text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
        type="file"
        {...register(slug, validation)}
      />
      <div className="h-4">
        {errors[slug] && (
          <span className="text-red-400 text-sm">
            {errorText || "*This field is required"}
          </span>
        )}
      </div>
    </>
  );
};
export default FileField;
