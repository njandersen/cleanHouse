import {
  IoEnterOutline,
  IoExitOutline,
  IoAdd,
  IoHomeOutline,
  IoList,
} from "solid-icons/io";

import SideBarIcon from "./SideBarIcon";

export default function NavBar() {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-teal-700 shadow-lg text-2xl">
      <SideBarIcon icon={<IoHomeOutline />} text={"Home"} />
      <SideBarIcon icon={<IoEnterOutline />} text={"Sign In"} />
      <SideBarIcon icon={<IoAdd />} text={"Add Room/Chores"} />
      <SideBarIcon icon={<IoList />} text={"All Chores"} />
    </div>
  );
}
