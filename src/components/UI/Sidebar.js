import { GoDiffAdded } from "react-icons/go";
import { IoIosLogIn, IoIosHome } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white text-white shadow-lg dark:bg-gray-900">
      <SidebarIcons icon={<GoDiffAdded size="28" />} />
      <SidebarIcons icon={<IoIosHome size="28" />} />
      <SidebarIcons icon={<IoIosLogIn size="28" />} />
    </div>
  );
}

function SidebarIcons({ icon }) {
  return <div className="sidebar-icon group">{icon}</div>;
}
