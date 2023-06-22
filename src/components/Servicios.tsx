import React from 'react'

export default function Servicios({title}) {
    const textData = [
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
        { title: 'Consultas y asesoramiento'},
        { title: 'Autorizaciones'},
      ];
  return (
    <div className='container w-full h-full bg-white'>
        <p className=' text-5xl font-bold text-center'>{title}</p>
        <div className="w-full md:w-1/2 p-20">
          {textData.map((item, index) => (
            <React.Fragment key={index}>
              <h2>{item.title}</h2>
              
            </React.Fragment>
          ))}
</div>
    </div>
  )
}
