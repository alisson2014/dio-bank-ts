import { Routes, Route } from "react-router-dom"
import { Layout } from "./components"
import { Home, Account } from "./pages"

const AppRouter = () => (
  <Layout>
    <Routes>
      <Route path="*" element={<div>404 Error</div>} />
      <Route path="/" element={<Home />} />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  </Layout>
)

export default AppRouter
