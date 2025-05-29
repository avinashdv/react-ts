import { useState, createContext, useContext } from "react";
import { ThemeToggleType } from "../interfaces/ThemeToggle";

const ThemeContext = createContext<ThemeToggleType | null>(null);

export const useTheme = () => useContext(ThemeContext) as ThemeToggleType;

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`theme-body ${theme === "light" ? "light-bg" : "dark-bg"}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

function ThemeToggle() {
  return (
    <ThemeProvider>
      <div>
        <h1>Toggle Theme Example</h1>
        <ToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default ThemeToggle;
