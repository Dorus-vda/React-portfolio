import React from 'react'
import { SimpleCard } from './SimpleCard';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Projects() {
  return (
    <section className='flex container absolute'>
      <div className='relative overflow-hidden shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg  w-1/6'>
        <img className='flex-shrink-0 w-full z-1' src="src/assets/metischat-project.jpg" alt="MetisChat image" />
        <div className='opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 text-white'>
          <p className=''>MetisChat</p>
        </div>
      </div> 
      <div className='relative overflow-hidden shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg  w-1/6'>
        <img className='flex-shrink-0 w-full z-1' src="src/assets/metischat-project.jpg" alt="MetisChat image" />
        <div className='opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 text-white'>
          <p className=''>MetisChat</p>
        </div>
      </div>  
      <div className='relative overflow-hidden shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg  w-1/6'>
        <img className='flex-shrink-0 w-full z-1' src="src/assets/metischat-project.jpg" alt="MetisChat image" />
        <div className='opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 text-white'>
          <p className=''>MetisChat</p>
        </div>
      </div> 
      <SimpleCard></SimpleCard>
       
    </section>
  )
}

export default Projects