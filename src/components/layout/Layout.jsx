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
    </LayoutContainer>
  );
}

export default Layout;
