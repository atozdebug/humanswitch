import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  const token = localStorage.getItem("token");

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
        {token && <SideBar />}
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
          }}
          className="content-right"
        >
          {token && <Header />}
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
