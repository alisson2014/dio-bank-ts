import { Routes, Route } from "react-router-dom"
import { Home, Account, NotFound } from "./pages"
import { AppContext } from "./components"
import { useContext } from "react"

const AppRouter = () => {
  const { isLoggedIn } = useContext(AppContext)

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/account/:id"
        element={isLoggedIn ? <Account /> : <Home />}
      />
    </Routes>
  )
}

export default AppRouter
