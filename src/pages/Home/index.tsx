import { Button } from "@chakra-ui/react"
import { useState } from "react"
import styled from "styled-components"
import { Email, Login, Password } from "../../components"
import { LogIn } from "../../services"

export const Tittle = styled.h1`
  font-size: 20px;
  font-weight: bolder;
`

const HomePage = () => {
  const [email, setEmail] = useState<string>("")

  return (
    <Login>
      <Tittle>Faça o login</Tittle>
      <Email value={email} onChange={(event) => setEmail(event.target.value)} />
      <Password />
      <Button
        onClick={() => LogIn(email)}
        size="md"
        colorScheme="teal"
        width="100%"
      >
        Entrar
      </Button>
    </Login>
  )
}

export default HomePage
