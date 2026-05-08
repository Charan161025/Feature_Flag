import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import RoleSelector from "./pages/RoleSelector";

import SuperAdminLogin from "./pages/Login";
import SuperAdminDashboard from "./pages/Dashboard";

import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminDashboard from "./pages/AdminDashboard";

import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RoleSelector />}
        />

        <Route
          path="/superadmin"
          element={<SuperAdminLogin />}
        />

        <Route
          path="/superadmin/dashboard"
          element={
            <SuperAdminDashboard />
          }
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/signup"
          element={<AdminSignup />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/user"
          element={<UserDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;