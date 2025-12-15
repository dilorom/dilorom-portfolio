import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
    >
      {theme === "light" ? (
        <BsMoon className="text-xl" />
      ) : (
        <BsSun className="text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
