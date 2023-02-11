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
import { useTranslation } from "next-export-i18n";

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
  const { mutate, isLoading } = useMutation(
    async (values) => {
      console.warn("MUTATE", values);
      const response = await axios.post("/api/register", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.warn("RESPONSE", response);
      return response.data;
    },
    { onSuccess: (data) => router.push(`/success?id=${data.id}`) }
  );

  const onSubmit = (values: any) => {
    values.cv = values.cv[0];
    values.stateId = values.stateId[0];
    values.enrollmentVerification = values.enrollmentVerification[0];
    values.programmingLanguages = values.programmingLanguages.join(", ");
    mutate(values);
  };
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="registration">
      <Container>
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
              name={t("form.firstName")}
              slug="firstName"
              validation={{ required: true }}
            />
            <TextField
              register={register}
              errors={errors}
              name={t("form.lastName")}
              slug="lastName"
              validation={{ required: true }}
            />
            <DateField
              defaultText="01/01/2002"
              errors={errors}
              name={t("form.dateOfBirth")}
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
              name={t("form.citizenship")}
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
              name={t("form.cityOfResidence")}
              slug="cityOfResidence"
              validation={{ required: true }}
            />
            <FileField
              register={register}
              errors={errors}
              name={t("form.stateId")}
              slug="stateId"
              validation={{ required: true }}
            />
            <TextField
              register={register}
              errors={errors}
              name={t("form.schoolName")}
              slug="schoolName"
              validation={{ required: true }}
            />
            <TextField
              register={register}
              errors={errors}
              name={t("form.pursuingDegree")}
              slug="pursuingDegree"
              validation={{ required: true }}
            />
            <FileField
              register={register}
              errors={errors}
              name={t("form.enrollmentVerification")}
              slug="enrollmentVerification"
              validation={{ required: true }}
            />
            <TextField
              errorText="format must be like 2018"
              register={register}
              errors={errors}
              name={t("form.graduationYear")}
              slug="graduationYear"
              validation={{ required: true, pattern: /^[0-9]{4}$/ }}
            />
            <TextField
              register={register}
              errors={errors}
              name={t("form.email")}
              slug="email"
              errorText={t("form.emailError")}
              validation={{
                required: true,
                pattern: /(.+)@(.+){2,}\.(.+){2,}/,
              }}
            />
            <Dropdown
              defaultText={t("form.selectLanguage")}
              errors={errors}
              name={t("form.contestLanguage")}
              slug="contestLanguage"
              setValue={setValue}
              register={register}
              variants={["Kazakh", "Russian", "English"]}
              selected={getValues("contestLanguage")}
              validation={{ required: true }}
            />
            <MultiSelect
              errors={errors}
              defaultText={t("form.selectLanguages")}
              name={t("form.programmingLanguages")}
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
              name={t("form.cv")}
              slug="cv"
              validation={{ required: true }}
            />
          </div>
          <div className="mt-12">
            <TextAreaField
              register={register}
              errors={errors}
              name={t("form.motivationLetter")}
              slug="motivationLetter"
              errorText="Minimum 100 words."
              validation={{
                required: true,
                validate: (value: string | undefined) =>
                  value &&
                  value.split(" ").filter((text) => text?.length > 0).length >
                    100,
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
              {isLoading ? t("form.loading") : t("form.submit")}
            </button>
          </div>
        </form>
      </Container>
    </ComponentAnchor>
  );
}
