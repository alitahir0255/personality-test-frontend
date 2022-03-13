import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AdminScreen from "pages/AdminScreen";
import PlayScreen from "pages/PlayScreen";
import routes from "shared/routes";
import ResultScreen from "pages/ResultScreen";
import NotFoundScreen from "pages/NotFoundScreen";
import theme from "shared/theme";
import HomeScreen from "pages/HomeScreen";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routes._404Page} element={<NotFoundScreen />} />
          <Route path={routes.HOME} element={<HomeScreen />} />
          <Route path={routes.PLAY} element={<PlayScreen />} />
          <Route path={routes.ADMIN} element={<AdminScreen />} />
          <Route path={routes.RESULT} element={<ResultScreen />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
