import { ComponentAnchor } from "../componentAnchor";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import TextField from "../ui/form/TextField";
import NumberField from "../ui/form/NumberField";
import Dropdown from "../ui/form/Dropdown";
import { CountriesList } from "../../data/countries";
import FileField from "../ui/form/FileField";

// const incomingDataSchema = z.object({
//   firstName: z.string(),
//   lastName: z.string(),
//   email: z.string().email(),
//   dateOfBirth: z.string(),
//   citizenship: z.string(),
//   cityOfResidence: z.string(),
//   schoolName: z.string(),
//   pursuingDegree: z.string(),
//   currentYear: z.string(),
//   programmingLanguages: z.string(),
//   motivationLetter: z.string(),
// });

// const fileFields = {
//   stateId: 'application/pdf',
//   enrollmentVerification: 'application/pdf',
//   cv: 'application/pdf',
// }

export function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
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
      {JSON.stringify(getValues())}
      <form
        onSubmit={(e) => handleSubmit(() => mutate())(e)}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <TextField
            register={register}
            errors={errors}
            name="First name"
            slug="firstName"
            validation={{ required: true }}
          />
          <TextField
            register={register}
            errors={errors}
            name="Last Name"
            slug="lastName"
            validation={{ required: true }}
          />
          <div>
            <label>Date of Birth: </label>
            <input
              type="text"
              {...register("dateOfBirth", { required: true })}
            />
            {errors.dateOfBirth && <span>This field is required</span>}
          </div>
          <Dropdown
            errors={errors}
            name="Citizenship"
            slug="citizenship"
            setValue={setValue}
            register={register}
            variants={CountriesList}
            selected={getValues("citizenship")}
            validation={{ required: true }}
          />
          <TextField
            register={register}
            errors={errors}
            name="City of Residence"
            slug="cityOfResidence"
            validation={{ required: true }}
          />
          <FileField
            register={register}
            errors={errors}
            name="State Id"
            slug="stateId"
            validation={{ required: true }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <TextField
            register={register}
            errors={errors}
            name="School name"
            slug="schoolName"
            validation={{ required: true }}
          />
          <TextField
            register={register}
            errors={errors}
            name="Pursuing Degree"
            slug="pursuingDegree"
            validation={{ required: true }}
          />
          <div>
            <label>Enrollment Verification: </label>
            <input
              id="fileInput"
              type="file"
              {...register("enrollmentVerification", { required: true })}
            />
            {errors.stateId && <span>This field is required</span>}
          </div>
          <NumberField
            register={register}
            errors={errors}
            name="Graduation Year"
            slug="graduationYear"
            validation={{ required: true }}
          />
          <TextField
            register={register}
            errors={errors}
            name="Email address"
            slug="emailAddress"
            validation={{ required: true }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <Dropdown
            errors={errors}
            name="Contest Language"
            slug="contestLanguage"
            setValue={setValue}
            register={register}
            variants={["Kazakh", "Russian", "English"]}
            selected={getValues("contestLanguage")}
            validation={{ required: true }}
          />
          <Dropdown
            errors={errors}
            name="Programming Language"
            slug="programmingLanguage"
            setValue={setValue}
            register={register}
            variants={["C++", "Python", "Javascript"]}
            selected={getValues("programmingLanguage")}
            validation={{ required: true }}
          />
          <div>
            <label>CV: </label>
            <input
              id="fileInput"
              type="file"
              {...register("cv", { required: true })}
            />
            {errors.cv && <span>This field is required</span>}
          </div>
        </div>

        <button type="submit" className="p-4 bg-red-400">
          Submit
        </button>
      </form>
    </ComponentAnchor>
  );
}
