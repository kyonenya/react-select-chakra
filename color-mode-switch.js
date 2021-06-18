import React from "react";
import { useColorMode, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <FormControl
      w="auto"
      display="inline-flex"
      alignItems="center"
      position="fixed"
      bottom={4}
      left={4}
    >
      <FormLabel htmlFor="color-mode-switch" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="color-mode-switch"
        colorScheme="messenger"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};

export default ColorModeSwitch;
