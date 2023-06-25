import React, { useState } from "react";
import { ClassRoomCard } from "../classRooms/ClassRoomCard";

export const TeacherClass = ({ classes }) => {
  console.log(classes);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("new");
  const [loadedClasses, setLoadedClasses] = useState(6);
  const [loading, setLoading] = useState(false);

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedClasses = filteredClasses.sort((a, b) => {
    if (sort === "new") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "old") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return 0;
    }
  });

  const loadMoreClasses = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadedClasses((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Class List</h1>
      <input
        type="text"
        placeholder="Search classes"
        className="border border-gray-300 p-2 rounded w-full mt-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex justify-end my-4">
        <button
          className={`px-4 py-2 rounded-md ${
            sort === "new" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSort("new")}
        >
          New
        </button>
        <button
          className={`ml-4 px-4 py-2 rounded-md ${
            sort === "old" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSort("old")}
        >
          Old
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {sortedClasses.slice(0, loadedClasses).map((cls) => (
          <div key={cls._id}>
            <ClassRoomCard
              classId={cls._id}
              description={cls.description}
              name={cls.name}
              students={cls.students.length}
              code={cls.code}
              credits={cls.credits}
              section={cls.section}
              date={cls.createdAt}
            />
            {/* <div>
              <h2 className="text-lg font-semibold">{cls.name}</h2>
              <p className="mt-2">{cls.description}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p className="font-medium">{cls.teacher}</p>
              <p className="font-medium">{cls.students.length} Students</p>
            </div> */}
          </div>
        ))}
      </div>

      {loadedClasses < sortedClasses.length && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 rounded-md bg-gray-300"
            onClick={loadMoreClasses}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};
