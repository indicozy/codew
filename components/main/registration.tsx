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
import Container from "../ui/container";
import DateField from "../ui/form/Datepicker";
import MultiSelect from "../ui/form/MultiSelect";
import languages from "../../data/languages";
import TextAreaField from "../ui/form/TextAreaField";

// const incomingDataSchema = z.object({
//   firstName: z.string(),
//   lastName: z.string(),
//   email: z.string().email(),
//   dateOfBirth: z.string(),
//   citizenship: z.string(),
//   cityOfResidence: z.string(),
//   schoolName: z.string(),
//   pursuingDegree: z.string(),
//   currentYear: z.string(), // TODO it isn't there
//   programmingLanguages: z.string(),
//   motivationLetter: z.string(), // TODO now
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
  const { mutate, isLoading } = useMutation(
    async (values) => {
      console.warn("MUTATE", values);
      const response = await axios.post("/api/register", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.warn("RESPONSE", response);
    },
    { onSuccess: () => router.push("/success") }
  );

  const onSubmit = (values: any) => {
    values.cv = values.cv[0];
    values.stateId = values.stateId[0];
    values.enrollmentVerification = values.enrollmentVerification[0];
    mutate(values);
  };
  return (
    <ComponentAnchor id="registration">
      <Container>
        {JSON.stringify(getValues())}
        <form
          onSubmit={(e) => handleSubmit(onSubmit)(e)}
          encType="multipart/form-data"
          method="POST"
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
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
            <DateField
              defaultText="01/01/2002"
              errors={errors}
              name="Date of Birth"
              slug="dateOfBirth"
              setValue={setValue}
              register={register}
              variants={CountriesList}
              value={getValues("dateOfBirth")}
              validation={{ required: true }}
            />
            <Dropdown
              defaultText="Select Country"
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
            <FileField
              register={register}
              errors={errors}
              name="Enrollment Verification"
              slug="enrollmentVerification"
              validation={{ required: true }}
            />
            <TextField
              errorText="format must be like 2018"
              register={register}
              errors={errors}
              name="Graduation Year"
              slug="graduationYear"
              validation={{ required: true, pattern: /^[0-9]{4}$/ }}
            />
            <TextField
              register={register}
              errors={errors}
              name="Email address"
              slug="email"
              validation={{ required: true }}
            />
            <Dropdown
              defaultText="Select Language"
              errors={errors}
              name="Contest Language"
              slug="contestLanguage"
              setValue={setValue}
              register={register}
              variants={["Kazakh", "Russian", "English"]}
              selected={getValues("contestLanguage")}
              validation={{ required: true }}
            />
            <MultiSelect
              errors={errors}
              defaultText="Select Languages"
              name="Programming Languages"
              slug="programmingLanguages"
              setValue={setValue}
              register={register}
              variants={languages}
              selected={getValues("programmingLanguages")}
              validation={{ required: true }}
            />
            <FileField
              register={register}
              errors={errors}
              name="CV"
              slug="cv"
              validation={{ required: true }}
            />
          </div>
          <div className="mt-12">
            <TextAreaField
              register={register}
              errors={errors}
              name="What motivates you to participate in codeW?"
              slug="motivationLetter"
              errorText="Minimum 100 words."
              validation={{
                required: true,
                validate: (value: string | undefined) =>
                  value && value.split(" ").length > 100,
              }}
            />
          </div>

          <div className="flex justify-center">
            <button
              disabled={isLoading}
              type="submit"
              className={`px-6 py-2 text-2xl sm:text-2xl ${
                isLoading
                  ? "bg-gray-800"
                  : "bg-default hover:bg-rose-600 transition-all duration-150"
              } rounded-full`}
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </ComponentAnchor>
  );
}
