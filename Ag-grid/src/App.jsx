import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  const [rowData] = useState([
    {
      name: "Amit",
      age: 19,
      city: "Jaipur",
    },
    {
      name: "virendra",
      age: 55,
      city: "Jaipur",
    },
    {
      name: "Shubham",
      age: 98,
      city: "Jaipur",
    },
  ]);

  const [columnDefs] = useState([
    {
      field: "name",
    },
    {
      field: "age",
    },
    {
      field: "city",
    },
  ]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "400px",
        width: "700px",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;