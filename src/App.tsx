import * as React from "react"
import { Box } from "@chakra-ui/react"
import { Body } from "./components/Body"

function App() {
  return (
    <Box
      fontFamily="monospace"
      fontSize="20px"
      color="#252525"
      backgroundColor="#9413DC"
      minHeight="100vh"
      padding="25px"
    >
      <Body />
    </Box>
  )
}

export default App
