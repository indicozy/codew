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
      <Container>
        {/* {JSON.stringify(getValues())} */}
        <form
          onSubmit={(e) => handleSubmit(() => mutate())(e)}
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
              selected={getValues("citizenship")}
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
              errorText="teext should be like 2018"
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
              slug="emailAddress"
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
            <Dropdown
              errors={errors}
              defaultText="Select Language"
              name="Programming Language"
              slug="programmingLanguage"
              setValue={setValue}
              register={register}
              variants={["C++", "Python", "Javascript"]}
              selected={getValues("programmingLanguage")}
              validation={{ required: true }}
            />
            <FileField
              register={register}
              errors={errors}
              name="CV"
              slug="fileInput"
              validation={{ required: true }}
            />
          </div>

          <button type="submit" className="p-4 bg-red-400">
            Submit
          </button>
        </form>
      </Container>
    </ComponentAnchor>
  );
}
