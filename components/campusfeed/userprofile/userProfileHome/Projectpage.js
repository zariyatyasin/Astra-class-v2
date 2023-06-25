import React, { useState } from "react";

const Projectpage = () => {
  const initialVisiblePosts = 2; // Number of posts initially visible
  const [visiblePosts, setVisiblePosts] = useState(initialVisiblePosts);
  const [showAll, setShowAll] = useState(false);
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      description:
        "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
    },
    {
      title: "Improve your customer experience",
      href: "#",
      description:
        "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
    },
    {
      title: "Writing effective landing page copy",
      href: "#",
      description:
        "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
      date: "Jan 29, 2020",
      datetime: "2020-01-29",
    },
  ];
  const handleViewAll = () => {
    setVisiblePosts(posts.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setVisiblePosts(initialVisiblePosts);
    setShowAll(false);
  };

  return (
    <div>
      <div className="rounded-lg bg-white overflow-hidden shadow mt-5  p-6">
        <div className="max-w-7xl mx-auto  ">
          <h2 className="text-lg font-medium pb-6 text-gray-900 border-b">
            Types of Project I have worked on
          </h2>
          <div className=" ">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <div key={post.title} className="mt-6 border-b ">
                <div href="#" className="mt-2 block">
                  <p className="text-lg text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                  </p>
                  <div>
                    <div class="relative mt-3 ">
                      <div class="relative flex items-start  ">
                        <div class=" ">
                          <img
                            class="h-8 w-8   rounded-full   "
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Seal_of_East_Delta_University.png"
                          />
                        </div>

                        <div class="min-w-0 ml-2 flex-1 py-0">
                          <div class="text-sm leading-8 text-gray-500">
                            <span class="mr-0.5">
                              <a href="#" class="font-medium text-gray-900">
                                Hilary Mahy
                              </a>
                              added tags
                            </span>
                            <span class="mr-0.5">
                              <a
                                href="#"
                                class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span class="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    class="h-1.5 w-1.5 rounded-full bg-rose-500"
                                    aria-hidden="true"
                                  ></span>
                                </span>
                                <span class="ml-3.5 font-medium text-gray-900">
                                  Bug
                                </span>
                              </a>
                              <a
                                href="#"
                                class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span class="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    class="h-1.5 w-1.5 rounded-full bg-indigo-500"
                                    aria-hidden="true"
                                  ></span>
                                </span>
                                <span class="ml-3.5 font-medium text-gray-900">
                                  Accessibility
                                </span>
                              </a>
                            </span>
                            <span class="whitespace-nowrap">6h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-900 max-w-md">
                    {post.description}
                  </p>
                </div>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base    text-indigo-600 hover:text-indigo-500"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-4">
              {!showAll && posts.length > initialVisiblePosts && (
                <button
                  onClick={handleViewAll}
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  View All
                </button>
              )}
              {showAll && (
                <button
                  onClick={handleViewLess}
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  View Less
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
