import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import { AppContextProvider, Layout } from "./components"
import AppRouter from "./routes"
import { createLocalStorage, getAllLocalStorage } from "./services"
import { ResetCss } from "./theme/globalStyles"

function App() {
  !getAllLocalStorage() && createLocalStorage()
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ResetCss />
        <ChakraProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
