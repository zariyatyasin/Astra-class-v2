import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import Crudtable from "@/components/Table/CrudTable";
import DepermentList from "@/components/deperment/DepermentList";
import Faculty from "@/model/Faculty";
import { connectDb } from "@/utils/db";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const index = ({ faculties }) => {
  const [name, setName] = useState("");
  const [faculty, setFacultyCode] = useState("");

  const [data, setData] = useState(faculties);

  const onSubmitHanler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/subadmin/faculty", {
        name,
        faculty,
      });

      setData(Array.isArray(data.faculties) ? data.faculties : []);
      setName("");
      setFacultyCode("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <AdminLayout>
      <form
        className=" mb-8 grid grid-cols-6 gap-6 bg-white  sm:px-6 px-4 border rounded-md py-3"
        onSubmit={onSubmitHanler}
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Faculty Full name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            value={name}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Faculty Short name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            value={faculty}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
            onChange={(e) => setFacultyCode(e.target.value)}
          />
        </div>
        <div className="px-4 col-span-6 py-3  text-right sm:px-6 w-full">
          <button
            type="submit"
            className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  "
          >
            Add Faculty
          </button>
        </div>
      </form>
      <div>
        <DepermentList data={data} setData={setData} />{" "}
      </div>
    </AdminLayout>
  );
};

export default index;
export async function getServerSideProps(context) {
  connectDb();
  const faculties = await Faculty.find({}).sort({ updatedAt: -1 }).lean();
  return {
    props: {
      faculties: JSON.parse(JSON.stringify(faculties)),
    },
  };
}
