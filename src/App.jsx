import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Header from './Components/header'
import Achat from './Pages/Achat'

export default function App() {
  return ( 
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/achat" element={<Achat />} />
    </Routes>
  </BrowserRouter>
  )
}
