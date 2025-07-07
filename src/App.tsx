import { DataTable } from "./components/editable-table/data-table";
// import DemoPage from "./components/payments/page";
import data from "./components/editable-table/data.json";

function App() {
  return (
    <>
      {/* <DemoPage /> */}
      <DataTable data={data} />
    </>
  );
}

export default App;
