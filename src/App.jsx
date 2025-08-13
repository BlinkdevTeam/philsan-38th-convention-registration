import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import background from './assets/qr-background.png'
import CompleteDetails from './Components/CompleteDetails'
import './App.css'

function App() {

  return (
    <>
      <div className="relative max-w-[1280px] my-[20px] mx-auto z-[1] bg-[#ffffff]">
        <CompleteDetails/>
      </div>
      <div className="absolute top-[0] bottom-[0]">
        <img className="w-full h-full object-cover" src={background} alt=""/>
      </div>
    </>
  )
}

export default App
