import { ThemeProvider } from "styled-components";

import { theme } from "./styled/theme";
import { GlobalStyle } from "./styled/GlobalStyled";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SharedLayout>
          <Header/>
        </SharedLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
