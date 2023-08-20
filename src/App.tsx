import { SnackbarProvider } from "notistack";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
