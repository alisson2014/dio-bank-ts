const account = {
  name: "Irineu",
  email: "alm20@gmail.com",
  password: "123456",
}
export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account)
  }, 3000)
})
