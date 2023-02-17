import { login } from "./index.tsx"

describe("Login", () => {
  const mockEmail = "alm20@gmail.com"
  it("Deve exibir um alert com boas vindas, caso o email seja válido", async () => {
    const response = await login(mockEmail)
    expect(response).toBeTruthy()
  })

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("Email inválido")
    expect(response).toBeFalsy()
  })
})
