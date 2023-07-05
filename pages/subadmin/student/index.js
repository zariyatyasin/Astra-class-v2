import React, { useEffect, useState } from "react";
import { connectDb } from "@/utils/db";
import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import PersonalForm from "@/components/form/PersonalForm";
import Batch from "@/model/Batch";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AcademicForm from "@/components/forms/AcademicForm";
import FamilyInfoForm from "@/components/forms/FamilyInfoForm";
import axios from "axios";
const Index = ({ batch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getName, setGetName] = useState("");
  const initialFormData = {
    lastName: "",
    username,
    batch: "",
    password,
    name: "",
    email: "",
    role: "",
    gender: "",
    roll: "",
    cellPhone: "",
    birthDate: "",
    postalCode: "",
    city: "",
    street: "",
    examType: "",
    institutions: "",
    fieldOfStudy: "",
    qualificationDate: "",
    gpa: "",
    fatherFullName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherFullName: "",
    motherOccupation: "",
    motherPhone: "",
  };

  const initialErrors = {
    name: "",
    lastName: "",
    emailAddress: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  console.log("this si mat", formData.batch, getName);
  const resetForm = () => {
    setFormData(initialFormData);
    setErrors(initialErrors);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, lastName } = formData;
    const errors = {};
    if (!name) {
      errors.name = "First name is required";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name: formData.name,
          username: username,
          password: password,
          role: formData.role,
          batch: formData.batch,
          email: formData.email,
        }
      );

      if (response.status === 200) {
        resetForm();
      } else {
        console.error("Registration failed");
        return;
      }

      // Handle successful registration
    } catch (error) {
      console.error(error.response.data.message);
      // Handle error during registration
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error message for the current field
    }));

    if (name === "name") {
      const timestamp = Date.now().toString();
      const randomDigits = Math.floor(Math.random() * 10000);
      const paddedRandomDigits = randomDigits.toString().padStart(4, "0");
      const generatedUsername = `${value.replace(
        /\s+/g,
        ""
      )}${paddedRandomDigits}`;
      setPassword(generatedUsername);
      setUsername(generatedUsername);
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-full">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Profile
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <form className=" py-6" onSubmit={handleSubmit}>
          <div className="max-w-3xl bg-white shadow rounded-lg py-4 mx-auto   sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center bg-white space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt=""
                  />
                  <span
                    className="absolute inset-0 shadow-inner rounded-full"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Add Photo</h1>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Disqualify
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Advance to offer
              </button>
            </div>
          </div>

          <div className="mt-6 max-w-3xl   mx-auto grid grid-cols-1 gap-6   lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Applicant Information
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <PersonalForm
                      handleChange={handleChange}
                      batch={batch}
                      formData={formData}
                      setGetName={setGetName}
                      errors={errors}
                    />
                  </div>
                </div>
              </section>

              <section aria-labelledby="notes-title">
                <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="notes-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        Academic Information
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <AcademicForm />
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="notes-title">
                <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="notes-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        Family Information
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <FamilyInfoForm />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-3 lg:col-span-1"
            >
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-gray-900"
                >
                  User Info
                </h2>

                <div className="mt-6 flow-root">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <FormControl fullWidth>
                        <InputLabel id="country-label">Role</InputLabel>
                        <Select
                          id="role"
                          name="role"
                          autoComplete="role"
                          labelId="role-label"
                          fullWidth
                          defaultValue={formData.role}
                          value={formData.role}
                          onChange={handleChange}
                        >
                          <MenuItem value="Teacher">Teacher</MenuItem>
                          <MenuItem value="Student">Student</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <TextField
                        id="Username"
                        name="Username"
                        label="Username"
                        value={username}
                        autoComplete="Username"
                        variant="outlined"
                        fullWidth
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <TextField
                        id="email-address"
                        name="password"
                        label="Password"
                        autoComplete="Password"
                        value={password}
                        variant="outlined"
                        fullWidth
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 py-2 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-stretch">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Index;
export async function getServerSideProps(context) {
  connectDb();
  const batch = await Batch.find({}).sort({ updatedAt: -1 }).lean();

  return {
    props: {
      batch: JSON.parse(JSON.stringify(batch)),
    },
  };
}
