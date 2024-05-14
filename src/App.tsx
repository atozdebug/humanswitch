import { Suspense, lazy, useEffect, useState } from "react";
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
import Layout from "./Layout/layout";
import Pillars from "./pages/Login/pillars";
import Dashboard from "./pages/DashBoard/dashboard";
import MyReports from "./pages/DashBoard/myReports";
import Integration from "./pages/DashBoard/integration";
import Users from "./pages/DashBoard/users";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const ForgetPasswordPage = lazy(() => import("./pages/Login/forgetPassword"));
const SignupPages = lazy(() => import("./pages/Login/hrSignupPage"));
const LoginPage = lazy(() => import("./pages/Login/loginPage"));
const RegisterPage = lazy(() => import("./pages/Login/registerPage"));
const HomePage = lazy(() => import("./pages/Login/homePage"));

const App = () => {
  const [isTrue, setIsTrue] = useState(false);

  const data = useSelector((state: any) => state.login?.data);

  const RouteGuard = ({ children }: any) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/loginhr" />;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    token ? setIsTrue(true) : setIsTrue(false);
  }, [data]);

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
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/" element={<Outlet />}>
            {token ? (
              <Route index element={<Navigate to="/home" />} />
            ) : (
              <Route index element={<Navigate to="/login" />} />
            )}
          </Route> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signuphr" element={<SignupPages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginhr" element={<LoginHr />} />
          <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pillars" element={<Pillars />} />
        </Routes>
        {isTrue && (
          <Layout>
            <Routes>
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
        )}
      </BrowserRouter>
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
