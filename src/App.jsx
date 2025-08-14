import { useState } from 'react'
import './App.css'
import BasicForms from './Components/BasicForms'

function App() {
  let [form,setFrom] = useState()

  return (
  
    <div className='form-lead'>
      <nav>
        <h3 onClick={()=>setFrom("basic")} style={{  color: form === "basic" ? "afff" : ""}}>

          Basic Regitration form
        </h3>
      </nav>
      {form === "basic"? <BasicForms/> : <BasicForms/>}
      
    </div>
    
  )
}

export default App
