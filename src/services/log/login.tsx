import { api } from "../../api"

export const login = async (email: string): Promise<any> => {
  const data: any = await api

  if (email !== data.email) {
    return alert("Email inválido")
  }

  alert(`Bem vindo ${email}!`)
}
