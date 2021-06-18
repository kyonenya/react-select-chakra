/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/noviny/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./example";
import ColorModeSwitch from "./color-mode-switch";

ReactDOM.render(
  <ChakraProvider>
    <App />
    <ColorModeSwitch />
  </ChakraProvider>,
  document.getElementById("root")
);
