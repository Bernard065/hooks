import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        theme === "light" ? "bg-[#fff] text-[#000]" : "bg-[#333] text-[#fff]"
      )}
    >
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
