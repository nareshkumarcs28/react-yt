
import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div  className='parent'>
      
    <Card user="Sarthak" age={18} img="https://images.unsplash.com/photo-1765706727592-e9309fbb210a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user="Naresh" age={20}img="https://images.unsplash.com/photo-1765749419717-3ec821c3839a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user="Ayush" age={23} img="https://images.unsplash.com/photo-1765873360379-c2a3cb2631c9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user="Aman" age={23} img="https://images.unsplash.com/photo-1766169776580-719773aee8a8?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   
    </div>
    
    
  )
}

export default App
