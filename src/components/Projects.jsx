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

function Projects({}) {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='group group justify-self-start relative overflow-hidden flex shadow-xl ring-1 ring-gray-900/5 lg:w-1/6 sm:w-1/3 w-1/2 rounded-lg'>
        <img className='transition ease-in-out duration-500 scale-100 group-hover:scale-110' src="src/assets/metischat-project.jpg" alt="MetisChat image" />
        <div className='transition ease-in-out duration-500 opacity-0 absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50 text-white group-hover:opacity-100'>
          <p className=''>MetisChat</p>
        </div>
      </div> 
      <div className='group justify-self-end relative overflow-hidden flex shadow-xl ring-1 ring-gray-900/5 lg:w-1/6 sm:w-1/3 w-1/2  rounded-lg'>
        <img className='transition ease-in-out duration-500 scale-100 group-hover:scale-110' src="src/assets/metischat-project.jpg" alt="MetisChat image" />
        <div className='transition ease-in-out duration-500 opacity-0 absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50 text-white group-hover:opacity-100'>
          <p className=''>MetisChat</p>
        </div>
      </div> 
    </div>
  )
}

export default Projects