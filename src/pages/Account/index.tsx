import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../../components/CardInfo"
import { api } from "../../api"

interface IUserData {
  name: string
  email: string
  password: string
  balance: number
  id: string
}

const Account = () => {
  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  const actualDate = new Date()
  const { id } = useParams()
  const navigate = useNavigate()

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
