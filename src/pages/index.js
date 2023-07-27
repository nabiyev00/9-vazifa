import Head from "next/head";

import DashboartLayout from "@/components/layouts/DashboardLayouts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DashboartLayout>index</DashboartLayout>
    </>
  );
}
