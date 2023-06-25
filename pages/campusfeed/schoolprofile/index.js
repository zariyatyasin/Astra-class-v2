import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CamupsFeedNav from "@/components/campusfeed/navbar/camupsFeedNav";

import UniOverview from "@/components/campusfeed/uniProfile/UniOverview";
import HighlightsPpl from "@/components/campusfeed/uniProfile/HighlightsPpl";
import UniProfile from "@/components/campusfeed/uniProfile/UniProfile";
import UniHomePage from "@/components/campusfeed/uniProfile/UniHomePage";
import SchoolApply from "@/components/campusfeed/uniProfile/apply/SchoolApply";
import AppyRightBar from "@/components/campusfeed/uniProfile/apply/AppyRightBar";
import CampusPost from "@/components/campusfeed/mainpage/feed/CampusPost";
import CampusTextPost from "@/components/campusfeed/mainpage/feed/CampusTextPost";
import CampusTabs from "@/components/campusfeed/mainpage/CampusTabs";

const index = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const { pathname } = router;
    const tabName = pathname.split("/").pop();

    const tabIndex = tabs.findIndex(
      (tab) => tab.toLowerCase() === tabName.toLowerCase()
    );
    if (tabIndex !== -1) {
      setActiveTab(tabIndex);
    }
  }, [router]);
  const tabs = ["Home", "Post", "Requirements", "Campus", "Life", "Apply Now"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <UniHomePage />;
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <div>
              <CampusTabs />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 w-full md:w-1/3">
                <HighlightsPpl />
              </div>
              <div className="flex flex-col flex-1 md:flex-[2] gap-4">
                <CampusPost />
                <CampusTextPost />
              </div>
            </div>
          </div>
        );
      case 2:
        return <div>req</div>;
      case 3:
        return <div>Sol</div>;
      case 4:
        return <div>dd</div>;
      case 5:
        return <SchoolApply />;

      default:
        return null;
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    // const tabName = tabs[index].toLowerCase();
    // window.history.pushState(null, "", `/schoolprofile/${tabName}`);
  };
  const renderAdditionalComponents = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="grid grid-cols-1 gap-4">
            <UniOverview />
            <HighlightsPpl />
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 gap-4">
            <UniOverview />
            <HighlightsPpl />
          </div>
        );
      case 2:
        return null;
      case 3:
        return null;
      case 4:
        return null;

      case 5:
        return (
          <div className="grid grid-cols-1 gap-4">
            <AppyRightBar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div>
      <CamupsFeedNav />

      <div className="min-h-full">
        <header
          className=" pb-44 bg-gradient-to-r from-sky-800 to-cyan-600"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                  <div className="px-12 lg:px-0"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="-mt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Profile</h1>

            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <UniProfile />
                    <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-6 sm:divide-y-0 sm:divide-x">
                      {tabs.map((tab, index) => (
                        <div
                          key={index}
                          className={`px-6 py-5 text-sm font-medium text-center ${
                            index === activeTab ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleTabClick(index)}
                        >
                          <span className={`text-gray-600  `}>{tab}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {renderTabContent()}
              </div>

              {renderAdditionalComponents()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
