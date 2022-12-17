import { Header } from "./shared/Header"
import { Form } from "./components/Form"
import { ClientList } from "./components/ClientList"
import { Footer } from "./shared/Footer"

function App() {  
  return (
    <div className="container mx-auto mt-20">

      <Header />

      <Form />

      <ClientList />  

      <Footer />    

    </div>
  )
}

export default App
