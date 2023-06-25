import Link from "next/link";
import React from "react";

const EnrolementEndPage = ({ accessEnrollment }) => {
  console.log("meow", accessEnrollment);
  return (
    <div>
      <div className="h-screen pt-16 pb-12 flex flex-col  ">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center"></div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                If you Have any question talk to our office
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Enrollment Over
              </h1>
              <p className="mt-2 text-base text-gray-500">
                {accessEnrollment[0].description}
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnrolementEndPage;
