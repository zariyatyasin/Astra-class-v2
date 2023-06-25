import React, { useEffect, useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { useRouter } from "next/router";

const register = () => {
  const [selectUserType, setSelectUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const handleRoleSelection = (event) => {
    setSelectUserType(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    // Perform form validation
    const errors = {};

    if (!firstName) {
      errors.firstName = "Please enter your first name.";
    }

    if (!lastName) {
      errors.lastName = "Please enter your last name.";
    }

    if (!email) {
      errors.email = "Please enter your email address.";
    }

    if (!password) {
      errors.password = "Please enter your password.";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    console.log("this is error", errors);
    if (Object.keys(errors).length === 0) {
      console.log("Registration successful!");

      if (selectUserType === "student") {
        router.push("/register/student");
      } else if (selectUserType === "teacher") {
        router.push("/register/teacher");
      } else if (selectUserType === "institutions") {
        router.push("/register/institutions");
      }
    }
  };

  return (
    <div>
      <section className="bg-white  ay-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/9178791/pexels-photo-9178791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize  white">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500  gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500  gray-300">
                  Select type of account
                </h1>

                <div className="  md:flex md:items-center md:-mx-2">
                  <fieldset>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                      <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="project-type"
                          value="student"
                          className="sr-only"
                          aria-labelledby="project-type-0-label"
                          aria-describedby="project-type-0-description-0 project-type-0-description-1"
                          onChange={handleRoleSelection} // changed to lowercase
                          checked={selectUserType === "student"}
                        />
                        <div className="flex-1 flex">
                          <div className="flex flex-col">
                            <div
                              id="project-type-0-label"
                              className=" text-sm flex items-center font-medium text-gray-900"
                            >
                              <div className="mr-2">
                                <SchoolOutlinedIcon />
                              </div>
                              <p> Student</p>
                            </div>
                            <span
                              id="project-type-0-description-0"
                              className="mt-1 flex items-center text-sm text-gray-500"
                            >
                              Last message sent an hour ago
                            </span>
                          </div>

                          {selectUserType === "student" && (
                            <div>
                              <svg
                                className="h-5 w-5 text-indigo-600 absolute top-2 right-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div
                                className="absolute -inset-px rounded-lg  border-2 pointer-events-none"
                                aria-hidden="true"
                              ></div>
                            </div>
                          )}
                        </div>
                      </label>
                      <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="project-type"
                          value="teacher"
                          className="sr-only"
                          aria-labelledby="project-type-0-label"
                          aria-describedby="project-type-0-description-0 project-type-0-description-1"
                          onChange={handleRoleSelection} // changed to lowercase
                          checked={selectUserType === "teacher"}
                        />
                        <div className="flex-1 flex">
                          <div className="flex flex-col">
                            <div
                              id="project-type-0-label"
                              className=" text-sm flex items-center font-medium text-gray-900"
                            >
                              <div className="mr-2">
                                <AccountBoxOutlinedIcon />
                              </div>
                              <p> Teacher</p>
                            </div>
                            <span
                              id="project-type-0-description-0"
                              className="mt-1 flex items-center text-sm text-gray-500"
                            >
                              Last message sent an hour ago
                            </span>

                            {selectUserType === "teacher" && (
                              <div>
                                <svg
                                  className="h-5 w-5 text-indigo-600 absolute top-2 right-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <div
                                  className="absolute -inset-px rounded-lg  border-2 pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </label>
                      <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                        <input
                          type="radio"
                          name="project-type"
                          value="institutions"
                          className="sr-only"
                          onChange={handleRoleSelection} // changed to lowercase
                          checked={selectUserType === "institutions"}
                        />
                        <div className="flex-1 flex">
                          <div className="flex flex-col">
                            <div
                              id="project-type-0-label"
                              className=" text-sm flex items-center font-medium text-gray-900"
                            >
                              <div className="mr-2">
                                <ApartmentOutlinedIcon />
                              </div>
                              <p> Institutions</p>
                            </div>
                            <span
                              id="project-type-0-description-0"
                              className="mt-1 flex items-center text-sm text-gray-500"
                            >
                              Last message sent an hour ago
                            </span>
                            {selectUserType === "institutions" && (
                              <div>
                                <svg
                                  className="h-5 w-5 text-indigo-600 absolute top-2 right-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <div
                                  className="absolute -inset-px rounded-lg  border-2 pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500">{formErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Snow"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500">{formErrors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {formErrors.email && (
                    <p className="text-red-500">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {formErrors.password && (
                    <p className="text-red-500">{formErrors.password}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600  gray-200">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  holder-gray-600  ay-900  gray-300  r-gray-700 focus:border-blue-400  :border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {formErrors.confirmPassword && (
                    <p className="text-red-500">{formErrors.confirmPassword}</p>
                  )}
                </div>

                <button
                  className={`flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md ${
                    selectUserType && "hover:bg-blue-400 "
                  } `}
                  onClick={handleRegister} // Call the handleRegister function directly
                  disabled={!selectUserType}
                >
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default register;
