import { Button, Center, Flex, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../AppContext"

const Header = () => {
  const navigate = useNavigate()
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

  const logout = () => {
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <Flex fontSize="26px" fontWeight="bold">
      <Center>Dio Bank</Center>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  )
}

export default Header
