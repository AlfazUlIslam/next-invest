import { Navbar } from "./components"
import { Banner, Offerings, PaidOut, Apply, Footer} from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Offerings />
      <PaidOut />
      <Apply />
      <Footer />
    </div>
  )
}

export default App
