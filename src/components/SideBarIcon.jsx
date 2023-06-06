export default function SideBarIcon({ icon, text }) {
  return (
    <div class="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
