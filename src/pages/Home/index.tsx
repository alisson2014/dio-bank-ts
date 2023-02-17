import { Button } from "@chakra-ui/react"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppContext, Email, Login, Password } from "../../components"
import { login } from "../../services"

export const Tittle = styled.h1`
  font-size: 20px;
  font-weight: bolder;
`

const HomePage = () => {
  const [email, setEmail] = useState<string>("")
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateLogin = async (email: string) => {
    const loggedIn = await login(email)

    if (!loggedIn) {
      return alert("Email inválido!")
    }

    setIsLoggedIn(true)
    navigate("/account/1")
  }

  return (
    <Login>
      <Tittle>Faça o login</Tittle>
      <Email value={email} onChange={(event) => setEmail(event.target.value)} />
      <Password />
      <Button
        onClick={() => validateLogin(email)}
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
