import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const CreateUserTable = ({
  users,
  handleEditButtonClick,
  handleDelete,
  indexOfFirstUser,
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className=" min-w-full divide-y border  rounded-lg overflow-scroll divide-gray-300">
        <div className="w-full   ">
          <div className=" bg-white ">
            <table className=" min-w-full divide-y  ">
              <thead className=" bg-white  text-gray-900">
                <tr>
                  <th className="py-3.5 pl-4 pr-3   text-left font-medium text-sm   text-gray-900 ">
                    Name
                  </th>
                  <th className="py-3.5 pl-4 pr-3  font-medium text-sm   text-gray-900 ">
                    Email
                  </th>
                  <th className="py-3.5 pl-4 pr-3  font-medium text-sm   text-gray-900 ">
                    Username
                  </th>

                  <th className="py-3.5 pl-4 pr-3  font-medium text-sm   text-gray-900 ">
                    Role
                  </th>
                  <th className="py-3.5    pr-3  text-center font-medium text-sm   text-gray-900  ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr className="" key={index}>
                    {console.log("this si user", user._id)}
                    <td className="px-6 py-4">
                      <div className="flex a ">
                        <img
                          className="rounded-full h-10 w-10  object-cover"
                          src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                          alt="unsplash image"
                        />
                        <div className="ml-3 text-sm ">
                          <div className="">{user.name}</div>
                          <div className="text-gray-900">{user.roll}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4  text-center text-sm ">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-center text-sm  ">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 text-center text-sm ">
                      <span className="  px-2 py-0.5 rounded-full   bg-red-100 text-red-800">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4  text-center text-sm ">
                      <div className="flex item-center justify-center">
                        <div className="mr-2   transform cursor-pointer hover:text-blue-500 hover:scale-110">
                          <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
                        </div>
                        <div
                          className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
                          onClick={() => handleEditButtonClick(index)}
                        >
                          <CreateOutlinedIcon sx={{ fontSize: "18px" }} />
                        </div>
                        <div
                          className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
                          onClick={() =>
                            handleDelete(indexOfFirstUser + index, user._id)
                          }
                        >
                          <DeleteOutlineOutlinedIcon
                            sx={{ fontSize: "18px" }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserTable;
