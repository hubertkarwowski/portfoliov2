import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Technologies from "./components/Technologies";

export const lightTheme = {
  body: "#FFF",
  text: "#0A0C10",
  background: "rgb(232, 232, 232)",
};
export const darkTheme = {
  body: "#0E141B",
  text: "#F2F5F7",
  background: "#151F28",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <Technologies theme={theme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
