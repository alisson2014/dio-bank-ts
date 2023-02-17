import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../../components/CardInfo"
import { api } from "../../api"
import { AppContext } from "../../components"

interface IUserData {
  name: string
  email: string
  password: string
  balance: number
  id: string
}

const Account = () => {
  const [userData, setUserData] = useState<null | IUserData>()
  const { id } = useParams()
  const { isLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  !isLoggedIn && navigate("/")

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  const actualDate = new Date()
  if (userData && id !== userData?.id) {
    navigate("/")
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  )
}

export default Account
