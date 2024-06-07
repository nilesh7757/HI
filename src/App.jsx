import { useState } from 'react'
import Navbar from './componets/Navbar'
import Manager from './componets/manager'
import Footer from './componets/footer'
import './App.css'
function App() {

  return (
    <div className="main w-full h-full relative overflow-y-auto">
    <Navbar/>
    <div className="bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <Manager/> 
        </div>
    <Footer/>
    </div>
  )
}

export default App
