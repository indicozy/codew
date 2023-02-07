import { ComponentAnchor } from "../componentAnchor";
import { useForm } from "@pankod/refine-react-hook-form";
import { useSelect, useApiUrl } from "@pankod/refine-core";
import axios from "axios";
import { useState } from "react";

export function Registration() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const apiURL = useApiUrl();

  const { options } = useSelect({
    resource: "categories",
  });

  const onSubmitFile = async () => {
    setIsUploading(true);
    const inputFile = document.getElementById("fileInput") as HTMLInputElement;

    const formData = new FormData();
    formData.append("file", inputFile?.files?.item(0) as File);

    const res = await axios.post<{ url: string }>(
      `${apiURL}/media/upload`,
      formData,
      {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    setValue("thumbnail", res.data.url);
    setIsUploading(false);
  };
  return (
    <ComponentAnchor id="registration">
      <form onSubmit={() => handleSubmit(onFinish)}>
        <label>Image: </label>
        <input id="fileInput" type="file" onChange={onSubmitFile} />
        <input type="hidden" {...register("thumbnail", { required: true })} />
        {errors.thumbnail && <span>This field is required</span>}

        <button type="submit" className="p-4 bg-red-400">
          Submit
        </button>
      </form>
    </ComponentAnchor>
  );
}
