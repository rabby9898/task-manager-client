import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar Component */}
      <Sidebar />
      <div className="flex-1  md:ml-80">
        <div className="p-5">
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
