import './App.css'
import { useFormik } from 'formik'
function App() {
  const formik = useFormik({
    initialValues:{
      name: '',
      email:'',
      channel:''
    },
    onSubmit:values =>{
      console.log('Form data', values)
    }
  })

  // console.log(formik.values)
  return (
    <>
     <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor='name'>Name</label>
        <input 
          type='text' 
          id="name" 
          name="name" 
          onChange={formik.handleChange} 
          value={formik.values.name}
          />
        </div>

        <label htmlFor='email'>Email</label>
        <input type='email' id="email" name="email" onChange={formik.handleChange} value = {formik.values.email} />
        <div>
        <label htmlFor='name'>Channel</label>
        <input type='text' id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
        </div>
        <button type='submit'>Submit</button>

      </form>
     </div>
    </>
  )
}

export default App
