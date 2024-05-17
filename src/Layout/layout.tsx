import { useEffect, useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { useSelector } from "react-redux";

const Layout = ({ children }: any) => {
  const [isTrue, setIsTrue] = useState(true);

  const data = useSelector((state: any) => state.login?.data);

  useEffect(() => {
    const token = localStorage.getItem("token");

    token ? setIsTrue(true) : setIsTrue(false);
  }, [data]);

  return (
    <div className="bg-lightgray text-black main-outerr">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          height: "full",
        }}
      >
        {isTrue && <SideBar />}
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
          }}
          className="content-right"
        >
          {isTrue && <Header />}
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
