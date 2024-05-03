import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-100 text-black main-outerr">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          height: "full",
        }}
      >
        <SideBar />
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
          }}
          className="content-right"
        >
          <div>
            <Header />
          </div>
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
