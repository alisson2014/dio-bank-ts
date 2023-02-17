import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "."

const dioBank = {
  login: false,
}

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem")
  it("Deve retornar o objeto no local storage", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem")
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith("diobank")
  })
  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank))
  })

  it("Deve alterar o valor do objeto do localStorage", () => {
    changeLocalStorage(dioBank)
    expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank))
  })
})
