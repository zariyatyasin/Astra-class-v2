import React, { useState } from "react";

const CreateUserForm = ({
  onSubmit,
  onCancelEdit,
  isEditing,
  isModalOpen,
  name,
  email,
  role,
  setIsModalOpen,
  username,
  password,
  handleNameChange,
  handleRoleChange,
  handleEmailChange,
  handleUsernameChange,
  handlePasswordChange,
}) => {
  const handleCancelEdit = () => {
    onCancelEdit();
    setIsModalOpen(false);
  };
  return (
    <div className="fixed inset-0 flex items-center overflow-scroll justify-center z-10">
      <div
        class={` ${
          isModalOpen ? "fixed" : "hidden"
        } inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
        aria-hidden="true"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* <form onSubmit={onSubmit} className="mb-4 z-10">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="role">
            Role:
          </label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? "Update" : "Register"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="text-red-500 font-bold ml-2"
          >
            Cancel
          </button>
        )}
      </form> */}

      <div class="relative h-96 sm:h-[78vh]  inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[760px] w-full sm:p-6">
        <div class=" ">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div class="mt-2">
              <div className=" ">
                {/* <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="shadow-sm py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div> */}
                <section aria-labelledby="payment-details-heading">
                  <form onSubmit={onSubmit}>
                    <div className="  ">
                      <div className="  ">
                        <div>
                          <h2
                            id="payment-details-heading"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            Personal details
                          </h2>
                          <p className="mt-1 text-sm text-gray-500">
                            Update your billing information. Please note that
                            updating your location could affect your tax rates.
                          </p>
                        </div>

                        <div className="mt-6 grid grid-cols-4 gap-6">
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="cc-given-name"
                              value={name}
                              onChange={handleNameChange}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Role
                            </label>

                            <select
                              id="role"
                              name="role"
                              value={role}
                              onChange={handleRoleChange}
                              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            >
                              <option>Teacher</option>
                              <option>Student</option>
                              <option>SubAdmin</option>
                            </select>
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              value={email}
                              onChange={handleEmailChange}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="expiration-date"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              name="expiration-date"
                              id="expiration-date"
                              value={username}
                              onChange={handleUsernameChange}
                              autoComplete="cc-exp"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="security-code"
                              className="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>Password</span>
                            </label>
                            <input
                              type="text"
                              name="security-code"
                              id="security-code"
                              value={password}
                              onChange={handlePasswordChange}
                              autoComplete="cc-csc"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Home Phone
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Gender
                            </label>
                            <select
                              id="country"
                              name="role"
                              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="expiration-date"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Date of Birth
                            </label>
                            <input
                              type="text"
                              name="expiration-date"
                              id="expiration-date"
                              autoComplete="cc-exp"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="security-code"
                              className="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>Street</span>
                            </label>
                            <input
                              type="text"
                              name="security-code"
                              id="security-code"
                              autoComplete="cc-csc"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="security-code"
                              className="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>City</span>
                            </label>
                            <input
                              type="text"
                              name="security-code"
                              id="security-code"
                              autoComplete="cc-csc"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="security-code"
                              className="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>Zip/Postcode</span>
                            </label>
                            <input
                              type="text"
                              name="security-code"
                              id="security-code"
                              autoComplete="cc-csc"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" mt-8 ">
                        <div>
                          <h2
                            id="payment-details-heading"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            Academic Information
                          </h2>
                          <p className="mt-1 text-sm text-gray-500">
                            Update your billing information. Please note that
                            updating your location could affect your tax rates.
                          </p>
                        </div>

                        <div className="mt-6 grid grid-cols-4 gap-6">
                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Exam Type
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="cc-given-name"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-2">
                            <div className="col-span-4 sm:col-span-2">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Exam Type
                              </label>
                              <select
                                id="country"
                                name="role"
                                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                              >
                                <option>SSC</option>
                                <option>JSC</option>
                                <option>PSC</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name & location of institution(s) attended
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-2">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Date of Qualification
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="expiration-date"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Main Field of Study
                            </label>
                            <input
                              type="text"
                              name="expiration-date"
                              id="expiration-date"
                              autoComplete="cc-exp"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="security-code"
                              className="flex items-center text-sm font-medium text-gray-700"
                            >
                              <span>CGPA</span>
                            </label>
                            <input
                              type="text"
                              name="security-code"
                              id="security-code"
                              autoComplete="cc-csc"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 sm:mt-4    bottom-0  sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm   px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        {isEditing ? "Update" : "Register"}
                      </button>
                      <button
                        type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
