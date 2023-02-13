import { Container } from "@chakra-ui/react"
import { Main } from "../Main"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Body = () => {
  return (
    <Container display="flex" flexDirection="column" gap="80px">
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}
