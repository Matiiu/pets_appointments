import { useState, useEffect } from 'react'
import { Error } from './Error'

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')   
  const [email, setEmail] = useState('')   
  const [fecha, setFecha] = useState('')   
  const [sintomas, setSintomas] = useState('')   

  const[error, setError] = useState(false)

  useEffect(() => {
  if (Object.keys(paciente).length > 0) {
    setNombre(paciente.nombre) 
    setPropietario(paciente.propietario) 
    setEmail(paciente.email) 
    setFecha(paciente.fecha) 
    setSintomas(paciente.sintomas) 
  }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  
  const handleSubmit = event => {
    event.preventDefault()
    
    if([ nombre, propietario, email, fecha, sintomas ].includes('')) 
      return setError(true)    

    setError(false) 

    const pacienteObject = {
      nombre,
      propietario, 
      email, 
      fecha, 
      sintomas     
    }

    if (paciente.id) {
      pacienteObject.id = paciente.id  
      const newPacienteObject = pacientes.map(pacienteState => pacienteState.id === paciente.id ? pacienteObject : pacienteState)      
      setPacientes(newPacienteObject)
      setPaciente({})

    } else {
      pacienteObject.id = generarId()
      setPacientes([...pacientes, pacienteObject])   
    }

    setNombre('')
    setPropietario('')   
    setEmail('')   
    setFecha('')   
    setSintomas('')  
   }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimineto Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Añade paciente y {''} 
        <span className="text-indigo-600">Administralo</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"        
      >
        { error && 
            <Error> 
              <p>Todos los campos son obligatiorios</p> 
            </Error>            
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            type="text" 
            id="mascota" 
            name="mascota" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-sky-300"
            value={nombre}
            onChange={ event => setNombre(event.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
            type="text" 
            id="propietario" 
            name="propietario" 
            placeholder="Nombre de la Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-sky-300"
            value={propietario}
            onChange={ event => setPropietario(event.target.value) }

          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="Email" 
            placeholder="Email de Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-sky-300"
            value={email}
            onChange={ event => setEmail(event.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
          <input 
            type="date" 
            id="alta" 
            name="alta"         
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-sky-300"
            value={fecha}
            onChange={ event => setFecha(event.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea 
            name="sintomas" 
            id="sintomas"           
            rows="7" 
            placeholder="Describe Los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-sky-300" 
            value={sintomas}
            onChange={ event => setSintomas(event.target.value) }
          />
        </div>
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg mb-10 hover:bg-indigo-700 cursor-pointer transition-all focus:outline-indigo-600"
          value={ !paciente.id ? 'Agregar Paciente' : 'Editar Paciente' }
        />
      </form>
     
    </div>
  )
}

export  { Form }
