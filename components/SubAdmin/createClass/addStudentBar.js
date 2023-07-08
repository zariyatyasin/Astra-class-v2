import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddStudentSearch = ({
  courseId,
  students,
  setStudentList,
  studentList,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const data = students;

  const itemsPerPage = 6;
  const [addStudent, setAddedStudent] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const maxPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);

    const filteredData = data.filter(
      (item) =>
        item.name?.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.id
          ?.toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );

    if (filteredData.length === 1) {
      const studentIndex = addStudent.findIndex(
        (student) => student.id === filteredData[0].id
      );
      if (studentIndex === -1) {
        setAddedStudent([...addStudent, filteredData[0]]);
      } else {
        const newAddedStudent = [...addStudent];
        newAddedStudent.splice(studentIndex, 1);
        setAddedStudent(newAddedStudent);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (event.key === "ArrowDown" && currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    } else if (event.key === "Enter" && paginatedData.length > 0) {
      const studentIndex = addStudent.findIndex(
        (student) => student.id === paginatedData[0].id
      );
      if (studentIndex === -1) {
        setAddedStudent([...addStudent, paginatedData[0]]);
      } else {
        const newAddedStudent = [...addStudent];
        newAddedStudent.splice(studentIndex, 1);
        setAddedStudent(newAddedStudent);
      }
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAddStudent = async (student) => {
    try {
      const res = await axios.put(`/api/subadmin/createclass/${id}`, {
        id: student._id,
        studentName: student.name,
        studentRoll: student.rollNumber,
      });

      const newStudentList = [...studentList, res.data.students];
      setStudentList(newStudentList);
      setAddedStudent((prevState) => [...prevState, student]);
    } catch (error) {
      console.error(error);
    }
  };

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
          onKeyDown={handleKeyDown}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 border border-r-red-300">
          {paginatedData.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.rollNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-900"
                  onClick={() => {
                    const studentIndex = addStudent.findIndex(
                      (student) => student._id === item._id
                    );
                    if (studentIndex === -1) {
                      setAddedStudent([...addStudent, item]);
                      handleAddStudent(item); // pass the student object to the handler
                    } else {
                      const newAddedStudent = [...addStudent];
                      newAddedStudent.splice(studentIndex, 1);
                      setAddedStudent(newAddedStudent);
                      handleAddStudent(item);
                      // handle remove student logic here
                    }
                  }}
                >
                  {addStudent.findIndex(
                    (student) => student._id === item._id
                  ) === -1
                    ? "Add"
                    : "Remove"}
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

export default AddStudentSearch;
