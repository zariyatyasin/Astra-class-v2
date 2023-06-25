import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/store/cartSlice";

export default function EnrollmentTable({ courses, user }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartSlice.cartItems);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 200 },
    { field: "credits", headerName: "Credits", width: 200 },
    { field: "faculty", headerName: "Faculty", width: 200 },
    { field: "amount", headerName: "amount", width: 200 },
    {
      field: "",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <AddButton row={params.row} dispatch={dispatch} />
      ),
    },
  ];

  const filteredCourses = courses?.filter(
    (course) => course.faculty === user.faculty
  );

  const rows = filteredCourses?.map((course, index) => ({
    ...course,
    id: index + 1,
  }));

  return (
    <div className="h-600 w-full mt-5">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

function AddButton({ row, dispatch }) {
  const cart = useSelector((state) => state.cartSlice.cartItems);

  const isAdded = cart.some((item) => item.id === row.id);

  const handleClick = () => {
    if (isAdded) {
      dispatch(removeFromCart(row.id)); // dispatch a new action to remove the item from cartItems
    } else {
      dispatch(addToCart(row)); // dispatch the existing action to add the item to cartItems
    }
  };

  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
        isAdded ? "bg-red-500" : ""
      }`}
      onClick={handleClick}
    >
      {isAdded ? "Remove" : "Add"}
    </button>
  );
}
