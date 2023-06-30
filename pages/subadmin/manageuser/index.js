import React, { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import CreateUserTable from "@/components/Table/CreateUserTable";
import CreateUserForm from "@/components/form/CreateUserForm";

import { connectDb } from "@/utils/db";
import User from "@/model/User";

const Index = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(" ");
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log(role);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([...user]);
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [password, setPassword] = useState("");

  const usersPerPage = 5;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setName(enteredName);

    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000);
    const paddedRandomDigits = randomDigits.toString().padStart(4, "0");
    const generatedUsername = `${enteredName.replace(
      /\s+/g,
      ""
    )}${paddedRandomDigits}`;

    setUsername(generatedUsername);
    setPassword(generatedUsername);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    const newUser = {
      name,
      username,
      email,
      role,
      password,
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
    setRole("");
    setUsername("");
    setPassword("");
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterRole(e.target.value);
  };

  const handleDelete = async (index, userId) => {
    // Show confirmation dialog before deleting the user
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (shouldDelete) {
      try {
        if (userId === user._id) {
          console.error("You cannot delete yourself.");
          return;
        }
        await axios.delete("http://localhost:3000/api/auth/signup/", {
          data: {
            userId: userId,
          },
        });
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        // Handle successful deletion
      } catch (error) {
        window.confirm("You can't delete yourself");
        console.error(error.response?.data?.message);
        // Handle error during deletion
      }
    }
  };

  const handleEditButtonClick = (index) => {
    setIsModalOpen(true);
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
    setRole("");
    setIsEditing(false);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(filteredAndRoleUsers.length / usersPerPage);
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
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

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
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-gray-900">Users</h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title,
          email and role.
        </p>

        <div className="flex justify-between mb-4 mt-10">
          <div className="w-1/4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by name or email"
              className="w-full border  text-sm border-gray-300 rounded-md      text-gray-900 block  pl-3 pr-10 py-2   sm:text-sm"
            />
          </div>
          <div className="w-1/4 ">
            <select
              value={filterRole}
              onChange={handleFilter}
              className="w-full border border-gray-300 rounded-md  p-2 text-sm   text-gray-900 block  pl-3 pr-10 py-2   sm:text-sm  "
            >
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div></div>
        </div>
        <CreateUserTable
          users={users}
          handleEditButtonClick={handleEditButtonClick}
          handleDelete={handleDelete}
          indexOfFirstUser={indexOfFirstUser}
        />
        {renderPagination()}
        {isModalOpen && (
          <CreateUserForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onSubmit={handleSubmit}
            onCancelEdit={handleCancelEdit}
            isEditing={isEditing}
            name={name}
            email={email}
            role={role}
            username={username}
            password={password}
            handleNameChange={handleNameChange}
            handleRoleChange={handleRoleChange}
            handleEmailChange={(e) => setEmail(e.target.value)}
            handleUsernameChange={(e) => setUsername(e.target.value)}
            handlePasswordChange={(e) => setPassword(e.target.value)}
          />
        )}
      </div>
    </AdminLayout>
  );
};

export default Index;
export async function getServerSideProps(context) {
  connectDb();

  const user = await User.find({}).sort({ updatedAt: -1 }).lean();

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
