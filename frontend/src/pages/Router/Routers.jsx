import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Dashboard, Login} from '../index';
import {AssignTodrivers, Navigation, Profile} from '../../components/index'
const Routers = (setLoggedIn, username) => {
  console.log(setLoggedIn, username)
  return (
    <BrowserRouter>
      <div className="bg-white w-[90dvw] h-[90dvh] m-auto rounded-xl p-8 overflow-scroll">
         {username ? <Navigation setLoggedIn={setLoggedIn}/> : null}
          <Routes>
              <Route/>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/assign" element={<AssignTodrivers />} />
                <Route path="/profile" element={<Profile />} />
              <Route/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Routers