import { Box, Container } from "@chakra-ui/react"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }: any) => {
  return (
    <Box
      fontFamily="monospace"
      fontSize="20px"
      color="#252525"
      backgroundColor="#9413DC"
      minHeight="100vh"
      padding="25px"
    >
      <Container display="flex" flexDirection="column" gap="80px">
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Layout
