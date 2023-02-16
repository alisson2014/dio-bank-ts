import { Routes, Route } from "react-router-dom"
import { Home, Account, NotFound } from "./pages"
import { Layout } from "./components"

const AppRouter = () => (
  <Layout>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  </Layout>
)

export default AppRouter
