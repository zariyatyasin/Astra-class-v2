import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [generatedUsername, setGeneratedUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const [password, setPassword] = useState("");
  const [usersPerPage] = useState(5);

  const handleAdditionalInfoToggle = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setName(enteredName);

    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000);
    const paddedRandomDigits = randomDigits.toString().padStart(4, "0");
    const username = `${enteredName.replace(/\s+/g, "")}${paddedRandomDigits}`;
    setGeneratedUsername(username);
    setUsername(generatedUsername);
    setPassword(username);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      username: username,
      email: email,
      role: role,
      password: password,
    };

    if (isEditing) {
      const updatedUsers = [...users];
      updatedUsers[selectedUser] = newUser;
      setUsers(updatedUsers);
      setSelectedUser(null);
      setIsEditing(false);
    } else {
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
    setRole("student");
    setUsername("");
    setGeneratedUsername("");
    setPassword("");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterRole(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEditClick = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setRole(userToEdit.role);
    setUsername(userToEdit.username);
    setSelectedUser(index);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("student");
    setIsEditing(false);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAndRoleUsers = filteredUsers.filter(
    (user) => filterRole === "all" || user.role === filterRole
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredAndRoleUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredAndRoleUsers.length / usersPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-gray-200 px-3 py-1 rounded-l"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-1 ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => goToPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="bg-gray-200 px-3 py-1 rounded-r"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit} className="mb-4">
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
              onChange={(e) => setGeneratedUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
            type="button"
            onClick={handleAdditionalInfoToggle}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            {showAdditionalInfo
              ? "Hide Additional Info"
              : "Additional Information"}
          </button>

          {showAdditionalInfo && (
            <>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address:
                </label>
                <input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="city">
                  City:
                </label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="age">
                  Age:
                </label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </>
          )}
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
        </form>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by name or email"
            className="w-full border border-gray-300 rounded p-2 mr-2"
          />
          <select
            value={filterRole}
            onChange={handleFilter}
            className="border border-gray-300 rounded p-2"
          >
            <option value="all">All</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="text-right">
                  <button
                    className="text-blue-500 font-bold mr-2"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {renderPagination()}
      </div>
    </AdminLayout>
  );
};

export default Index;
