import { Button } from "@chakra-ui/react"
import { login } from "../../services/log/login"
import styled from "styled-components"
import { InputField } from "../InputField"

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

export const Main = () => {
  return (
    <Card>
      <Tittle>Faça o login</Tittle>
      <InputField name="Email" type="email" placeHolder="Digite seu email" />
      <InputField name="Senha" type="password" placeHolder="Digite sua senha" />
      <Button onClick={login} size="md" colorScheme="teal">
        Entrar
      </Button>
    </Card>
  )
}
