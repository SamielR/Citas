
const Pacientes = ({datos, setPaciente, eliminarPaciente}) => {
  
  const {nombre, propietario, email, fechaAlta, sintomas, id} = datos

  const handlePaciente = () =>{
    const respuesta = confirm('Deseas eliminar este paciente')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {''}
        <span className="font-normal normal-case">{fechaAlta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div>
        <button 
        type="button"
        onClick={() => setPaciente(datos)}
        className="bg-indigo-600 text-white font-normal px-4 py-1 mx-2 rounded-md hover:bg-indigo-800 transition-all"
        >Editar</button>

        <button 
        type="button"
        className="px-4 py-1 mx-2 text-black rounded-md hover:bg-red-600 transition-all hover:text-white "
        onClick={handlePaciente}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Pacientes
