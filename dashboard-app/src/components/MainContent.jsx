import React from "react";
import UserForm from "./UserForm";
import DataTable from "./DataTable";

const MainContent = () => {
  return (
    <main className="p-6 bg-gray-50 overflow-auto flex flex-col gap-6">
      <UserForm />
      <DataTable />
    </main>
  );
};

export default MainContent;