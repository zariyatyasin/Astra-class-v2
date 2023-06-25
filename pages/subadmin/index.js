import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";

import DashboardCard01 from "@/components/cards/dashboard/DashboardCard01";

import DashboardCard04 from "@/components/cards/dashboard/DashboardCard04";
import DashboardCard05 from "@/components/cards/dashboard/DashboardCard05";
import DashboardCard06 from "@/components/cards/dashboard/DashboardCard06";
import DashboardCard07 from "@/components/cards/dashboard/DashboardCard07";
import DashboardCard08 from "@/components/cards/dashboard/DashboardCard08";
import DashboardCard09 from "@/components/cards/dashboard/DashboardCard09";
import DashboardCard10 from "@/components/cards/dashboard/DashboardCard10";
import DashboardCard11 from "@/components/cards/dashboard/DashboardCard11";
import DashboardCard12 from "@/components/cards/dashboard/DashboardCard12";
import DashboardCard13 from "@/components/cards/dashboard/DashboardCard13";
import WelcomeBanner from "@/components/cards/dashboard/WelcomeBanner";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <AdminLayout>
      <Head>
        <title>EDU</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4     w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard01 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard01 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard04 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
              {/* Line chart (Sales Over Time) */}
              <DashboardCard08 />
              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09 />
              {/* Card (Customers) */}
              <DashboardCard10 />
              {/* Card (Reasons for Refunds) */}
              <DashboardCard11 />
              {/* Card (Recent Activity) */}
              <DashboardCard12 />
              {/* Card (Income/Expenses) */}
              <DashboardCard13 />
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
};

export default index;
