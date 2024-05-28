import { useEffect, useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const [isTrue, setIsTrue] = useState(true);
  const location = useLocation();

  const allow = location.pathname !== "/pillars";

  const noHeader = location.pathname !== "/reports";

  const data = useSelector((state: any) => state.login?.data);
  const data2 = useSelector((state: any) => state.authentication?.data);
  const logout = useSelector((state: any) => state.activity?.logout);

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? setIsTrue(true) : setIsTrue(false);
  }, [data, data2, logout]);

  return (
    <div className="bg-white text-black main-outerr">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          height: "full",
        }}
      >
        {isTrue && allow && <SideBar />}
        <div
          className={`${
            isTrue && allow ? "content-right w-100-272px" : "w-full"
          }`}
        >
          {isTrue && allow && noHeader && <Header />}
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
