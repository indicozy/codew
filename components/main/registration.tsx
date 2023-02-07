import { ComponentAnchor } from "../componentAnchor";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

export function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { mutate } = useMutation(
    async (values) => {
      console.log(values);
      // await axios.post("/path/to/api", values, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
    // { onSuccess: () => router.push("/success") }
  );

  return (
    <ComponentAnchor id="registration">
      <form
        onSubmit={() => handleSubmit(() => mutate())}
        encType="multipart/form-data"
        method="POST"
      >
        <label>Image: </label>
        <input
          id="fileInput"
          type="file"
          {...register("thumbnail", { required: true })}
        />
        {errors.thumbnail && <span>This field is required</span>}

        <button type="submit" className="p-4 bg-red-400">
          Submit
        </button>
      </form>
    </ComponentAnchor>
  );
}
