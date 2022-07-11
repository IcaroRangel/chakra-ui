import React from 'react';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  HStack,
} from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>
    </ChakraProvider>
  );
}

export default App;
