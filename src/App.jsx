import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>
}
