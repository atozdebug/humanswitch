import { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  // Outlet,
  Navigate,
} from "react-router-dom";
import LoginHr from "./pages/Login/hrLogin";
import Settings from "./pages/DashBoard/settings";
import Chatbot from "./pages/DashBoard/chatbot";
import Pillars from "./pages/Login/pillars";
import Dashboard from "./pages/DashBoard/dashboard";
import MyReports from "./pages/DashBoard/myReports";
import ManageReports from "./pages/DashBoard/ManageReports";

import Integration from "./pages/DashBoard/integration";
import Users from "./pages/DashBoard/users";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/layout";
import ForgetPasswordId from "./pages/Login/forgetPasswordId";
import ManagePlans from "./pages/DashBoard/managePlans";
import ManageRoles from "./pages/DashBoard/manageRoles";
import Companies from "./pages/DashBoard/companies";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import KnowledgeBase from "./pages/DashBoard/knowledgeBase";
import AdvisorSettings from "./pages/DashBoard/AdvisorSettings";
import NewDocument from "./components/KnowledgeBase/NewDocument";
const ForgetPasswordPage = lazy(() => import("./pages/Login/forgetPassword"));
const SignupPages = lazy(() => import("./pages/Login/hrSignupPage"));
const HomePage = lazy(() => import("./pages/Login/homePage"));

const App = () => {
  const DefaultRoute = () => {
    const token = localStorage.getItem("token");
    return true ? <Navigate to="/dashboard" /> : <Navigate to="/home" />;
  };

  const RouteGuard = ({ children }: any) => {
    const token = localStorage.getItem("token");
    return true ? children : <Navigate to="/login" />;
  };

  const PublicRouteGuard = ({ children }: any) => {
    const token = localStorage.getItem("token");
    return true ? <Navigate to="/dashboard" /> : children;
  };

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Toaster reverseOrder={false} />
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Outlet />}>
            {token ? (
              <Route index element={<Navigate to="/home" />} />
            ) : (
              <Route index element={<Navigate to="/login" />} />
            )}
          </Route> */}
              <Route
                path="/signup"
                element={
                  <PublicRouteGuard>
                    <SignupPages />
                  </PublicRouteGuard>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRouteGuard>
                    <LoginHr />
                  </PublicRouteGuard>
                }
              />
              <Route
                path="/forgetPassword"
                element={
                  <PublicRouteGuard>
                    <ForgetPasswordPage />
                  </PublicRouteGuard>
                }
              />
              <Route
                path="/reset-password"
                element={
                  <PublicRouteGuard>
                    <ForgetPasswordId />
                  </PublicRouteGuard>
                }
              />
              <Route
                path="/home"
                element={
                  <PublicRouteGuard>
                    <HomePage />
                  </PublicRouteGuard>
                }
              />
              <Route path="/" element={<DefaultRoute />} />;
              <Route path="/pillars" element={<Pillars />} />
              <Route
                path="/dashboard"
                element={
                  <RouteGuard>
                    <Dashboard />
                  </RouteGuard>
                }
              />
              <Route
                path="/reports"
                element={
                  <RouteGuard>
                    <MyReports />
                  </RouteGuard>
                }
              />
              <Route
                path="/chatbot"
                element={
                  <RouteGuard>
                    <Chatbot />
                  </RouteGuard>
                }
              />
              <Route
                path="/advisor-settings"
                element={
                  <RouteGuard>
                    <AdvisorSettings />
                  </RouteGuard>
                }
              />
              <Route
                path="/manage-plans"
                element={
                  <RouteGuard>
                    <ManagePlans />
                  </RouteGuard>
                }
              />
              <Route
                path="/manage-roles"
                element={
                  <RouteGuard>
                    <ManageRoles />
                  </RouteGuard>
                }
              />
              <Route
                path="/knowledge-base"
                element={
                  <RouteGuard>
                    <KnowledgeBase />
                  </RouteGuard>
                }
              />
              <Route
                path="/knowledge-base/new-document"
                element={
                  <RouteGuard>
                    <NewDocument />
                  </RouteGuard>
                }
              />
              <Route
                path="/manage-reports"
                element={
                  <RouteGuard>
                    <ManageReports />
                  </RouteGuard>
                }
              />
              <Route
                path="/companies"
                element={
                  <RouteGuard>
                    <Companies />
                  </RouteGuard>
                }
              />
              <Route
                path="/integrations"
                element={
                  <RouteGuard>
                    <Integration />
                  </RouteGuard>
                }
              />
              <Route
                path="/users"
                element={
                  <RouteGuard>
                    <Users />
                  </RouteGuard>
                }
              />
              <Route
                path="/settings"
                element={<Navigate to="/settings/profile" replace />}
              />
              <Route
                path="/settings/:tab"
                element={
                  <RouteGuard>
                    <Settings />
                  </RouteGuard>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LocalizationProvider>
    </Suspense>
  );
};

export default App;

{
  /*
import { Suspense, lazy, useMemo, useState } from "react";
//import reactLogo from './assets/react.svg'






//import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import ToastContainerPopup from "./commonPopup/Popup";
import CircularProgress from '@mui/material/CircularProgress';
const ScrollToTopButton = lazy(()=> import("./scroolToTop/scroolToTopView"));
const Header = lazy(() => import("./components/Header/header"));
const HomeComponent = lazy(() => import("./components/Home/home"));
const Login = lazy(() => import("./components/auth/Login/login"));
const Register = lazy(() => import("./components/auth/Register/register"));
// const Footer = lazy(() => import("./components/Footer/footer"));
const ProtectedRoute = lazy(() => import('./components/auth/RouteGuard'));
const ResultComponent = lazy(()=> import("./components/Result/result"));
const App = () => {
  const token = localStorage.getItem('token');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [darkMode]
  );

  return (
    <Suspense fallback={ <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress color="success" /></div>}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <ToastContainerPopup />
        {/* {token &&  */
}
// <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
// {/* } */}
// <Routes>
//   <Route path="/" element={<Outlet />}>
//   { token ? (
//   <Route index element={<Navigate to="/app/home" />} />
//   ) : (
//   <Route index element={<Navigate to="/app/auth/login" />} />
//   )}
//   </Route>
//   <Route path="/app/auth/login" element={<Login darkMode={darkMode} />} />
//   <Route path="/app/auth/register" element={<Register darkMode={darkMode} />} />
//   <Route caseSensitive  path="/app/home" element={<ProtectedRoute Component={HomeComponent} darkMode={darkMode} />} />
//   <Route caseSensitive  path="/app/result" element={<ProtectedRoute Component={ResultComponent} />} />
//   <Route path="/*" element={<Navigate to = "/" />} />
// </Routes>
// <ScrollToTopButton />
{
  /* {token && <Footer />} */
}
//       </BrowserRouter>
//       </ThemeProvider>
//     </Suspense>
//   );
// };

// export default App; */}
