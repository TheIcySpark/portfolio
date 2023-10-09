import {
  ChakraProvider,
  Text,
  VStack,
  theme,
  Heading} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import SplitScreen from "./components/SplitScreen"
import AboutMe from "./components/AboutMe"
import ProjectCards from "./components/ProjectCards"

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <ColorModeSwitcher position={"fixed"} right="2" top="2" />
      <SplitScreen></SplitScreen>
      <AboutMe></AboutMe>
      <Heading>
      <Text>
        Some of my proyects
      </Text>
      </Heading>
      <ProjectCards />
    </VStack>
  </ChakraProvider>
)
