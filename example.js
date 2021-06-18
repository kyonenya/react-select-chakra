import React from "react";
import Select from "./chakra-react-select";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { groupedOptions } from "./docs/data";

export default () => (
  <Box>
    <FormControl p={4}>
      <FormLabel>Select Colors and Flavours</FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="sm"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>Select Colors and Flavours</FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>Select Colors and Flavours</FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="lg"
      />
    </FormControl>
  </Box>
);
