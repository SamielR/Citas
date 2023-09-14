import Pacientes from "./Pacientes"
import {useEffect} from 'react'

const ListadoPacientes = ({paciente, setPaciente, eliminarPaciente}) => {


  return (


    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {paciente && paciente.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {paciente.map(dato =>(
        <Pacientes
          key={dato.id}
          datos = {dato}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      ))}
      </>
      ):(
        <>
      <h2 className="font-black text-3xl text-center">No hay pacientes aun</h2>
      <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando tus {""}
        <span className="text-indigo-600 font-bold">nuevos Pacientes</span>
      </p>
        </>
      )}


    </div>
 
  )
}

export default ListadoPacientes
