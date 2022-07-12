import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";
import useLocalStorage from "use-local-storage";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  const [theme, setTheme] = useLocalStorage("Light");
  function switchTheme() {
    const newTheme = theme === "Dark" ? "Light" : "Dark";
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <Header />
      <AddTask />
      <TaskList />
      <ThemeSwitch switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

export default App;
