import { useState, useEffect } from "react"
import { Center, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../../components/CardInfo"
import { api } from "../../api"

interface IUserData {
  name: string
  email: string
  password: string
  balance: number
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

  console.log(userData)

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text="Informções de acesso" />
        <CardInfo text="Informações da conta" />
      </SimpleGrid>
    </Center>
  )
}

export default Account
