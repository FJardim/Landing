import React from 'react'

export default function Servicios({title}) {
  const documents = ['Compraventa','Afectación y Desafectación al Régimen de Protección de la Vivienda', 'Contrato de locación' ,'Poderes', 'Donación', 'Permuta', 'Constitución y Cancelación de Usufructo', 'Constitución y Cancelación de Hipoteca', 'Actas de Constatación, Manifestación y Notificaciones','Testamentos', 'Constituciones y Modificaciones de Sociedades','Trámites Societarios',]
  return (
    <div>
      <p className=' justify-center flex text-5xl font-semibold mb-6'>{title}</p>
<div className='flex justify-around'>
    <ul className=' text-xl  m-7'>
      <p className='mb-6 font-semibold text-lg'>Profesionales</p>
      {documents.map((documents, index) => (
        <li key={index}>{documents}</li>
      ))}
    </ul>
    <ul  className=' text-xl  m-7'>
    <p className='mb-6 font-semibold text-lg'>Particulares</p>
      {documents.map((documents, index) => (
        <li key={index}>{documents}</li>
      ))}
    </ul>
    </div>
    </div>
    
    
  )
}
