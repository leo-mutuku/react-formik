import { useState } from 'react'
import {useFormik} from 'formik'
import './App.css'
import { useFormik } from 'formik'

function App() {
  const [count, setCount] = useState(0)
  const formik = useFormik({})

  return (
    <>
     <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id="name" name="name" />

        <label htmlFor='email'>Email</label>
        <input type='email' id="name" name="name" />
        
        <label htmlFor='name'>Channel</label>
        <input type='text' id="name" name="name" />

        <button type='submit'>Submit</button>
      </form>
     </div>
    </>
  )
}

export default App
