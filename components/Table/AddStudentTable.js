import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddStudentTable = ({ studentList, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const maxPages = Math.ceil(studentList?.length / itemsPerPage);
  const router = useRouter();
  const { id } = router.query;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (student) => {
    try {
      const res = await axios.put(`/api/subadmin/createclass/${id}`, {
        id: student.studentId,
        studentName: student.studentName,
        studentRoll: student.studentRoll,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = studentList?.filter(
    (item) =>
      item.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studentRoll
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-end mb-4">
        <label htmlFor="search" className="mr-2">
          Search:
        </label>
        <input
          type="text"
          id="search"
          className="px-2 py-1 border rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roll
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((item) => (
            <tr key={item.studentId}>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.studentName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.studentRoll}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <nav
          className="z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {Array.from({ length: maxPages }, (_, i) => (
            <button
              key={i}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                currentPage === i + 1
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : ""
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AddStudentTable;
