import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages"
import Account from "./pages/Account"

const AppRouter = () => (
  <Layout>
    <Routes>
      <Route path="*" element={<div>404 Error</div>} />
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </Layout>
)

export default AppRouter
