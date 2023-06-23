import React from 'react'

export default function Servicios() {
  const documents = ['Compraventa','Afectación y Desafectación al Régimen de Protección de la Vivienda', 'Contrato de locación' ,'Poderes', 'Donación', 'Permuta', 'Constitución y Cancelación de Usufructo', 'Constitución y Cancelación de Hipoteca', 'Actas de Constatación, Manifestación y Notificaciones','Testamentos', 'Constituciones y Modificaciones de Sociedades','Trámites Societarios',]
  return (
    <div className='flex justify-around'>
    <ul>
      {documents.map((documents, index) => (
        <li key={index}>{documents}</li>
      ))}
    </ul>
    <ul>
      {documents.map((documents, index) => (
        <li key={index}>{documents}</li>
      ))}
    </ul>
    </div>
    
  )
}
