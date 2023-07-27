import DashboardLayout from "@/components/layouts/DashboardLayouts";
import Head from "next/head";
import React from "react";

const Tasks = () => {
  return (
    <>
      <DashboardLayout>
        <Head>
          <title>Tasks</title>
        </Head>
        Tasks
      </DashboardLayout>
    </>
  );
};

export default Tasks;
