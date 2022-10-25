import { GoDiffAdded } from "react-icons/go";
import { IoIosLogIn, IoIosHome } from "react-icons/io";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white text-white shadow-lg dark:bg-gray-900">
      <SidebarIcons
        icon={<GoDiffAdded size="28" />}
        link={"/admin/createroom"}
      />
      <SidebarIcons icon={<IoIosHome size="28" />} link={"/admin"} />
      <SidebarIcons icon={<IoIosLogIn size="28" />} link={"/enter"} />
    </div>
  );
}

function SidebarIcons({ icon, link }) {
  return (
    <div className="sidebar-icon group">
      <Link href={`${link}`}>{icon}</Link>
    </div>
  );
}
