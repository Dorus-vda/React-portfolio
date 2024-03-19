import React from 'react'
import { SimpleCard } from './SimpleCard';
import { Projecttemplate } from './projecttemplate';
import { MetisChat_wip, metischat_project, quantumproject_cover, cpp_img} from '../assets'

function Projects({}) {
  return (
    <div className='grid grid-rows-4'>
      <div className='mt-10'>
        <Projecttemplate description="A messaging application, developed with Android Studio using Kotlin and XML.
            This was my first experience developing a mobile application." image={MetisChat_wip} title="Metis Chat"></Projecttemplate>
      </div>
      <div className='mt-10'>
        <Projecttemplate description="For my end of high-school research paper (PWS), I worked on a project related to quantum computing." image={quantumproject_cover} title="Quantum Project"></Projecttemplate>
      </div>
      <div className='mt-10'>
        <Projecttemplate description="With guidance from Dr. ing. Thilo Kielmann we completed a university level introductory course on programming." image={cpp_img} title="C++"></Projecttemplate>
      </div>
    </div>
  )
}

export default Projects