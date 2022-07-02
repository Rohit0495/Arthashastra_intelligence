import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Chart from "./Component/Chart";
import Table from "./Component/Table";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<>
  <App />
  <BrowserRouter>
    <Routes>
      <Route path="table" element={<Table />} />
      <Route path="chart" element={<Chart />} />
    </Routes>
  </BrowserRouter>
  </>
);