import { login } from "."

describe("Login", () => {
  const mockEmail = "alm20@gmail.com";
  const mockPassword = "123456";
  it("Deve exibir um alert com boas vindas, caso o email seja válido", async () => {
    const response = await login(mockEmail, mockPassword)
    expect(response).toBeTruthy()
  })

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email ou senha inválidos", "")
    expect(response).toBeFalsy()
  })
})
