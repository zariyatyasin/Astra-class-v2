import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CamupsFeedNav from "@/components/campusfeed/navbar/camupsFeedNav";

import SchoolApply from "@/components/campusfeed/uniProfile/apply/SchoolApply";

import UserProfile from "@/components/campusfeed/userprofile/UserProfile";
import UserProfileHomePage from "@/components/campusfeed/userprofile/userProfileHome/UserProfileHomePage";

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
  const tabs = ["Home", "Post", "About", "Campus"];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <UserProfileHomePage />;
      case 1:
        return null;
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
        return null;
      case 1:
        return null;
      case 2:
        return null;
      case 3:
        return null;
      case 4:
        return null;

      case 5:
        return null;

      default:
        return null;
    }
  };
  return (
    <div>
      <CamupsFeedNav />

      <div className="min-h-full">
        <main className="  pb-8">
          <section>
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <UserProfile />
              <div className="max-w-7xl mx-auto border-t border-gray-200  items-center flex">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`px-6 py-2 md:py-5 text-sm font-medium text-center ${
                      index === activeTab ? " border-b-2 border-blue-500" : ""
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

          {renderAdditionalComponents()}
        </main>
      </div>
    </div>
  );
};

export default index;
