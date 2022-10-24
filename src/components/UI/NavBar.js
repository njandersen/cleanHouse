import { FaMoon, FaSun, FaRegBell } from "react-icons/fa";

import darkMode from "../../hooks/darkMode";

export default function NavBar({}) {
  return (
    <div className="flex flex-row items-center justify-evenly bg-gray-300 bg-opacity-90 w-full h-16 m-0 shadow-lg dark:bg-gray-700">
      <h1>cleanHouse</h1>
      <ThemeIcon />
    </div>
  );
}

function ThemeIcon() {
  const [darkTheme, setDarkTheme] = darkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
}
