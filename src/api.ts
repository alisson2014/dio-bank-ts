const account = {
  name: "Luan",
  email: "alm20@gmail.com",
  password: "123456",
  balance: 2000.0,
  id: "1",
}
export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account)
  }, 3000)
})
