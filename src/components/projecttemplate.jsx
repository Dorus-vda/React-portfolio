import React from 'react'
import { SimpleCard } from './SimpleCard';
import { MetisChat_wip, metischat_project, quantumproject_cover} from '../assets'

export function Projecttemplate({description, title, image}){
    return (
    <div className='grid'>
        <h1 className='text-center text-3xl text-white mb-3'>{title}</h1>
        <div className='group box-content transition ease-in-out duration-500 justify-self-center relative overflow-hidden shadow-xl ring-1 ring-gray-900/5 lg:w-2/3 sm:w-3/4 w-3/4 rounded-lg'>
            <img className='transition ease-in-out duration-500 scale-100 group-hover:scale-110 h-fit' src={image} alt="MetisChat image" />
            <SimpleCard image1={image} description={description}></SimpleCard>
        </div>
    </div>
    );
}