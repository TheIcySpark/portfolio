import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import SplitScreen from "./components/SplitScreen"

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <ColorModeSwitcher position={"fixed"} right="2" top="2"/>
      <SplitScreen></SplitScreen>
    </VStack>
  </ChakraProvider>
)
