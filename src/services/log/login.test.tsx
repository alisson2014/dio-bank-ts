import { login } from "./login"

describe("Login", () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = "alm20@gmail.com"
  it("Deve exibir um alert com boas vindas, caso o email seja válido", async () => {
    await login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
  })

  it("Não deve exibir a mensagem de boas vindas sem o email", async () => {
    await login(mockEmail)
    expect(mockAlert).not.toHaveBeenLastCalledWith("Bem vindo!")
  })

  it("Deve exibir um erro caso o email seja inválido", async () => {
    await login("Email inválido")
    expect(mockAlert).toHaveBeenCalledWith("Email inválido")
  })
})
