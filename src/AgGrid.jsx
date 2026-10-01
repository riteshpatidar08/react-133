import React from "react";
import { AgGridReact } from "ag-grid-react";

function App() {

  const rowData = [
    { name: "Rohan", age: 22, city: "Jaipur" },
    { name: "Rahul", age: 24, city: "Delhi" },
    { name: "Aman", age: 21, city: "Mumbai" },
    { name: "Vikas", age: 25, city: "Pune" }
  ];

  const columnDefs = [
    { field: "name" },
    { field: "age" },
    { field: "city" }
  ];

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;