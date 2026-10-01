import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  const [rowData] = useState([
    {
      name: "Virendra",
      age: 25,
      city: "Jaipur",
    },
    {
      name: "Rahul",
      age: 24,
      city: "Delhi",
    },
    {
      name: "Amit",
      age: 26,
      city: "Mumbai",
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