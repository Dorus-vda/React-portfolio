import React from 'react'
import { SimpleCard } from './SimpleCard';
import { MetisChat_wip, metischat_project} from '../assets'

function Projects({}) {
  return (
    <div className='grid grid-rows-4'>
      <div className='grid'>
        <h1 className='text-center text-3xl text-white mb-10'>MetisChat</h1>
      
        <div className='group justify-self-center relative overflow-hidden flex shadow-xl ring-1 ring-gray-900/5 lg:w-2/3 sm:w-3/4 w-3/4 rounded-lg'>
            <img className='transition ease-in-out duration-500 scale-100 group-hover:scale-110' src={MetisChat_wip} alt="MetisChat image" />
            <SimpleCard image1={metischat_project}></SimpleCard>
          </div> 
        </div>
      <div>

      </div>
    </div>
  )
}

export default Projects