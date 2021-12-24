import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export const lightTheme = {
  body: "#FFF",
  text: "#0A0C10",
  textHover: "rgba(10, 12, 16, 0.4)",
  background: "rgb(232, 232, 232)",
  card: "rgba(232, 232, 232, 0.5)",
  button: "rgb(21, 31, 40)",
};
export const darkTheme = {
  body: "#0E141B",
  text: "#F2F5F7",
  textHover: "rgba(242, 245, 247, 0.4)",
  background: "rgb(21, 31, 40)",
  card: "rgba(21, 31, 40, 0.8)",
  button: "rgb(232, 232, 232)",
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
        <Hero />
        <Projects />
        <Technologies />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
