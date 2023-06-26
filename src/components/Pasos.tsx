import React from 'react'
import Gestion from './Gestion'
import CardInfo from './Card/CardsInfo'
export default function Pasos() {
  return (
    <div className=' container bg-gray-200'>
        <Gestion title={'¡Crea con facilidad tus documentos Legales!'} parraph={'Un formulario muy intuitivo te guiara en la redaccion de tus documentos'}/>
        <div className='mx-auto w-full max-w-[1000px] mb-20'>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main" placeholder="Buscar un Documento" />
          </div>
        <div className='flex justify-around'>
        <CardInfo title={'1. Elegi un modelo'} text={'Podes elegir entre los 110 modelos disponibles'}/>
        <CardInfo title={'2. Completar el Documento'} text={'Podes elegir entre los 110 modelos disponibles'}/>
        <CardInfo title={'3. Guardar e Imprimir'} text={'Podes elegir entre los 110 modelos disponibles'}/>
        </div>
        
    </div>
  )
}
