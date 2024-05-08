import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  const isTrue = true;
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
