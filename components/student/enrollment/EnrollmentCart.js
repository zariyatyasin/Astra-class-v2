import { emptyCart, removeFromCart } from "@/store/cartSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EnrollmentCart = ({ isOpen, setIsOpen, cartItems }) => {
  const [total, setTotal] = useState();
  const [credit, setCredit] = useState();
  const cart = useSelector((state) => state.cartSlice.cartItems);
  const dispatch = useDispatch();
  const enrollmentData = {
    enrolledCouses: cart.map((item) => ({
      courseId: item._id,
      code: item.code,
      courseName: item.name,

      credits: item.credits,

      ammout: item.amount,
    })),
    total: total,
    totalBeforeDiscount: null, // or set to the appropriate value
    couponApplied: null, // or set to the appropriate value
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/student/enrollment",
        enrollmentData
      );
      const enrollId = response.data.enroll_id;
      dispatch(emptyCart());
      setIsOpen(false);
      toast.success(`Enrollment successful. Enrollment ID: ${enrollId}`);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const totalAmount = cart.reduce(
      (accumulator, current) => accumulator + current.amount,
      0
    );
    const totalcredits = cart.reduce(
      (accumulator, current) => accumulator + current.credits,
      0
    );
    setCredit(totalcredits);
    setTotal(totalAmount);
  }, [cart]);
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
            <div
              className={`pointer-events-auto w-screen max-w-md transform transition-all ease-in-out duration-500 sm:duration-700 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Enrollment cart
                    </h2>
                    <div
                      className="ml-3 flex h-7 items-center border"
                      onClick={() => setIsOpen(false)}
                    >
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Close panel</span>

                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((item, id) => (
                          <li className="flex py-6" key={id}>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#"> {item.name} </a>
                                  </h3>
                                  <p className="ml-4">{item.amount}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.code}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">{item.credits}</p>

                                <div
                                  className="flex"
                                  onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                  }
                                >
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{total} tk</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total Credit </p>
                    <p className="text-indigo-600">{credit}</p>
                  </div>

                  <button
                    className="mt-6"
                    onClick={() => handleSubmit()}
                    disabled={cart.length === 0}
                  >
                    <p className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                      Enrolled
                    </p>
                  </button>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Go to home<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCart;
