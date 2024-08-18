import { ThemeProvider } from "styled-components";

import { theme } from "./styled/theme";
import { GlobalStyle } from "./styled/GlobalStyled";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Header from "./layouts/Header/Header";
import Hero from "./components/Hero/Hero";
import Greetings from "./components/Greetings/Greetings";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SharedLayout>        
          <Hero />
          <Greetings />
        </SharedLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
