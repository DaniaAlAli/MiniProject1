import React from "react";

//Styles
import { GlobalStyle, HeaderIntro, Name } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import DataList from "./components/DataList";

const theme = {
  fontFamily: "Indie Flower, cursive",
  alignItem: "center",
  justifyContent: "center",
  display: "flex",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Name>D A N I A _ A L A L I</Name>
      <HeaderIntro>Hello, welcome to my life!</HeaderIntro>
      <DataList />
    </ThemeProvider>
  );
}

export default App;
