import React from 'react'
import { NavBar } from '../components/navBar/navBar'
import Pasos from '../components/Pasos'
import Cifras from '../components/Cifras'

export default function Documents() {
  return (
    <div>
      <NavBar/>
    <Pasos />
    <Cifras title={'¡TE AYUDAMOS A COMPLETAR TUS DOCUMENTOS!'} parraph={'Un equipo de abogados y juristas redactar los modelos '}/>
    </div>
  )
}
