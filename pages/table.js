import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const TablePage = () => {
  return (
    <>
      <Head>
        <title>Table</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Table />
      </div>
    </>
  );
};

export default TablePage;
