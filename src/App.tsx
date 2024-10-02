import "./App.css";
import HomePage from "./pages/home.page";
import JobDetailsPage from "./pages/job-details.page";
import "./styles/index.min.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login/Login";
import { Register } from "./pages/Auth/Register/Register";
import { ResetPassword } from "./pages/Auth/ResetPassword/ResetPassword";
import { Logout } from "./pages/Auth/Logout/Logout";

import { Toaster } from "@/components/ui/toaster";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DashBoardResetPassword } from "./pages/Dashboard/ResetPassword/ResetPassword";
import { SettingsPage } from "./pages/Settings/Settings";
import EditAccountPage from "./pages/Dashboard/EditAccount/EditAccount";
import { ThemeProvider } from "./components/theme/themeProvider";
import PageLanding from "./pages/page.landing";

function App() {
  return (
    <>
      <div className="chat-container relative">
        <Routes>
          <Route path="/?" element={<HomePage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/landing" element={<PageLanding />} />
        </Routes>
      </div>
      <ThemeProvider>
        <Toaster />
        <div className="main">
          <Routes>
            {/* dashboad pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/change-password"
              element={<DashBoardResetPassword />}
            />
            <Route path="/edit-account" element={<EditAccountPage />} />
            <Route path="/settings" element={<SettingsPage />} />


            {/* auth pages */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/auth/logout" element={<Logout />} />

            {/* 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
