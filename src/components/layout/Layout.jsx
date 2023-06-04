import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
