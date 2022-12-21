import { Patient } from './Patient'

const ClientList = ({ pacientes, setPaciente, deletePaciente }) => {    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-5">

            { pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center md:mt-0 mt-10  ">Lista Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center font-bold">
                            Administra tus {''}
                            <span className="text-indigo-600">Paicentar y Citas</span>
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center md:mt-0 mt-10  ">No hay Pacientes</h2>                
                        <p className="text-xl mt-5 mb-10 text-center font-bold">
                            Comineza Agregando Pacientes {''}
                            <span className="text-indigo-600">y Apareceran aquí</span>
                        </p>
                    </>
                )              
            }           

            { pacientes.map(paciente => (
                <Patient 
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    deletePaciente={deletePaciente}
                />  
            ))}
        </div>
    )
}

export { ClientList }