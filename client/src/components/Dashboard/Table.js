import React, {useMemo,useState} from "react";
import { useTable, useFilters } from "react-table";

export default function Table({ data }) {
  
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Frequency of different cases",
        // First group columns
        columns: [
          {
            Header: "Countries",
            accessor: "Country,Other"
          },
          {
            Header: "Total Cases",
            accessor: "TotalCases"
          },
          {
            Header: "Total Recovered",
            accessor: "TotalRecovered"
          },
          {
            Header: "Total Deaths",
            accessor: "TotalDeaths"
          },
        ]
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters
    );
    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("Country,Other", value);
      setFilterInput(value);
    };
  // Render the UI for your table
  return (
    <>
      <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search Country"}
        />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}>{column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}