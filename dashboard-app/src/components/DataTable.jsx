import React, { useMemo } from "react";
import { useTable, useFilters } from "react-table";

const DataTable = () => {
  const data = useMemo(() => [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
  ], []);

  const columns = useMemo(() => [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
  ], []);

  const tableInstance = useTable({ columns, data }, useFilters);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-3xl w-full overflow-auto">
      <h3 className="text-lg font-semibold mb-4">User Data Table</h3>
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead className="bg-gray-100">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2 text-left text-sm text-gray-600">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-4 py-2 text-sm text-gray-800">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;