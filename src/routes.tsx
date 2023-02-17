import { Routes, Route } from "react-router-dom"
import { Home, Account, NotFound } from "./pages"
import { AppContext, Layout } from "./components"
import { useContext } from "react"

const AppRouter = () => {
  const { isLoggedIn } = useContext(AppContext)

  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/account/:id"
          element={isLoggedIn ? <Account /> : <NotFound />}
        />
      </Routes>
    </Layout>
  )
}

export default AppRouter
