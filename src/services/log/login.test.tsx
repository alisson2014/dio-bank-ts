import { login } from "./login"

describe("Login", () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it("Deve exibir um alert com boas vindas", () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo")
  })
})
