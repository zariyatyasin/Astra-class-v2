import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Table = ({
  students,
  setAddedStudents,
  notAddedStudents,
  onRemoveStudent,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempAddedStudents, setTempAddedStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const ITEMS_PER_PAGE = 10;

  const filteredStudents = students?.filter(
    (student) =>
      student.name &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredStudents.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const handleAddStudent = (student) => {
    if (tempAddedStudents.includes(student)) {
      // remove student from tempAddedStudents
      setTempAddedStudents((prevAddedStudents) =>
        prevAddedStudents.filter((s) => s._id !== student._id)
      );
    } else {
      // add student to tempAddedStudents
      setTempAddedStudents((prevAddedStudents) => [
        ...prevAddedStudents,
        student,
      ]);
    }
  };

  const handleRemoveStudent = (studentToRemove) => {
    onRemoveStudent(studentToRemove);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await Promise.all(
        tempAddedStudents.map(async (studentToAdd) => {
          await axios.put(`/api/subadmin/createclass/${id}`, {
            id: studentToAdd._id,
            studentName: studentToAdd.name,
            studentRoll: studentToAdd.rollNumber,
          });
        })
      );
      setTempAddedStudents([]);
      setAddedStudents(tempAddedStudents);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    // <div className="flex flex-col">
    //   <div className="flex items-center ">
    //     <input
    //       type="text"
    //       className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
    //       placeholder="Search students..."
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button className="px-8 rounded-r-lg bg-green-500 text-white font-bold p-4 uppercase border-green-600 border-t border-b border-r">
    //       Search
    //     </button>
    //   </div>

    //   <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    //     <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
    //       <table className="min-w-full leading-normal">
    //         <thead>
    //           <tr>
    //             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //               Student Name
    //             </th>
    //             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //               Student Id
    //             </th>
    //             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
    //               Action
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {currentItems.map((student) => (
    //             <tr key={student._id}>
    //               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //                 <div className="flex items-center">
    //                   <div className="ml-3">
    //                     <p className="text-gray-900 whitespace-no-wrap">
    //                       {student.name}
    //                     </p>
    //                     <p className="text-gray-600 whitespace-no-wrap">
    //                       Roll Number: {student.rollNumber}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
    //                 {tempAddedStudents.includes(student) ? (
    //                   <button
    //                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    //                     onClick={() => {
    //                       setTempAddedStudents(
    //                         tempAddedStudents.filter((s) => s !== student)
    //                       );
    //                     }}
    //                   >
    //                     Remove
    //                   </button>
    //                 ) : !notAddedStudents?.includes(student) ? (
    //                   <button
    //                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    //                     onClick={() => handleRemoveStudent(student)}
    //                   >
    //                     Remove
    //                   </button>
    //                 ) : (
    //                   <button
    //                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    //                     onClick={() => handleAddStudent(student)}
    //                   >
    //                     Add
    //                   </button>
    //                 )}
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //       {filteredStudents.length === 0 && (
    //         <div className="px-6 py-4 whitespace-no-wrap">
    //           No students found.
    //         </div>
    //       )}
    //       {filteredStudents.length > 0 && (
    //         <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
    //           <div className="inline-flex mt-2 xs:mt-0">
    //             <button
    //               disabled={currentPage === 1}
    //               className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
    //               onClick={() => setCurrentPage(currentPage - 1)}
    //             >
    //               Previous
    //             </button>
    //             {Array.from({ length: totalPages }, (_, i) => (
    //               <button
    //                 key={i}
    //                 className={`mx-1 font-semibold py-2 px-4 ${
    //                   currentPage === i + 1
    //                     ? "bg-blue-500 text-white"
    //                     : "bg-gray-300 text-gray-700 hover:bg-gray-400"
    //                 } rounded`}
    //                 onClick={() => setCurrentPage(i + 1)}
    //               >
    //                 {i + 1}
    //               </button>
    //             ))}
    //             <button
    //               disabled={currentPage === totalPages}
    //               className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
    //               onClick={() => setCurrentPage(currentPage + 1)}
    //             >
    //               Next
    //             </button>
    //           </div>
    //           {notAddedStudents?.length > 0 && (
    //             <div className="inline-flex mt-2 xs:mt-0">
    //               <button
    //                 className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
    //                 onClick={handleSave}
    //               >
    //                 {loading ? "Loading..." : "Save"}
    //               </button>
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="px-4 sm:px-6 lg:px-8  bg-white  rounded-b-lg overflow-hidden shadow  ">
      <div className="sm:flex sm:items-center mt-2  ">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Student List</h1>
        </div>
        <div className="     ">
          <input
            id="search"
            name="search"
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500   sm:text-sm"
            placeholder="Search"
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="  divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentItems.map((student) => (
                    <tr key={student._id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {student.rollNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {student.email}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6  ">
                        {tempAddedStudents.includes(student) ? (
                          <button
                            href="#"
                            className="text-red-600 hover:text-red-900"
                            onClick={() => {
                              setTempAddedStudents(
                                tempAddedStudents.filter((s) => s !== student)
                              );
                            }}
                          >
                            Remove
                          </button>
                        ) : !notAddedStudents?.includes(student) ? (
                          <button
                            href="#"
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleRemoveStudent(student)}
                          >
                            Remove
                          </button>
                        ) : (
                          <button
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                            onClick={() => handleAddStudent(student)}
                          >
                            Add
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredStudents.length === 0 && (
                <div className="px-6 py-4 whitespace-no-wrap">
                  No students found.
                </div>
              )}

              {filteredStudents.length > 0 && (
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      disabled={currentPage === 1}
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        className={`mx-1 font-semibold py-2 px-4 ${
                          currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                        } rounded`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      disabled={currentPage === totalPages}
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                  {notAddedStudents?.length > 0 && (
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        onClick={handleSave}
                      >
                        {loading ? "Loading..." : "Save"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
