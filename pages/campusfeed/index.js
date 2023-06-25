import CampusTabs from "@/components/campusfeed/mainpage/CampusTabs";
import CampusTextPost from "@/components/campusfeed/mainpage/feed/CampusTextPost";
import CampusFeedSideNav from "@/components/campusfeed/mainpage/CampusFeedSideNav";
import CamupsFeedNav from "@/components/campusfeed/navbar/camupsFeedNav";
import FollowUser from "@/components/campusfeed/mainpage/FollowUser";
import JoinSchool from "@/components/campusfeed/mainpage/JoinSchool";
import CampusPost from "@/components/campusfeed/mainpage/feed/CampusPost";

const CampusFeed = () => {
  return (
    <div>
      <CamupsFeedNav />

      <div className="min-h-full">
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <CampusFeedSideNav />
            </div>
            <main className="lg:col-span-9 xl:col-span-6">
              <CampusTabs />
              <div className="mt-4">
                <CampusPost />
              </div>
              <div className="mt-4">
                <CampusTextPost />
              </div>
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                <JoinSchool />
                <FollowUser />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFeed;
