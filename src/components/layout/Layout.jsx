// Components
import { LayoutContainer } from "./LayoutStyles";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>

      <div className="p-2 text-center bg-gray-900 text-slate-400">
        Challenge Light-It ⚛️ Santiago Harkes
      </div>
    </LayoutContainer>
  );
}

export default Layout;
