import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { login } from "../../services/log/login"
import styled from "styled-components"
import { Email } from "../Email"
import { Password } from "../Password"

const Card = styled.div`
  padding: 10px 25px;
  background-color: #fafafa;
  border-radius: 12px;
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Tittle = styled.h1`
  font-size: 20px;
  font-weight: bolder;
`

export const Login = () => {
  const [email, setEmail] = useState<string>("")

  return (
    <Card>
      <Tittle>Faça o login</Tittle>
      <Email value={email} onChange={(event) => setEmail(event.target.value)} />
      <Password />
      <Button
        onClick={() => login(email)}
        size="md"
        colorScheme="teal"
        width="100%"
      >
        Entrar
      </Button>
    </Card>
  )
}
