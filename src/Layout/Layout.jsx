import { Outlet } from "react-router";
import BottomNav from "../component/BottomNav";
import TopNav from "../component/TopNav";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout;
