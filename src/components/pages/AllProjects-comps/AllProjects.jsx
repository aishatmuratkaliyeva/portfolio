import React from 'react'
import { Link } from 'react-router-dom'

import project1 from '/images/projectsImages/project1.png'
import project2 from '/images/projectsImages/project2.png'
import project6 from '/images/projectsImages/project6.png'
import project4 from '/images/projectsImages/project4.png'
import project5 from '/images/projectsImages/project5.png'
import project3 from '/images/projectsImages/project3.png'
import project8 from '/images/projectsImages/project8.png'
import project9 from '/images/projectsImages/project9.png'
import project7 from '/images/projectsImages/project7.png'

const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: project1,
            code: 'https://github.com/aishatmuratkaliyeva/project1'
        },
        {
            id: 2,
            src: project2,
            code: 'https://github.com/aishatmuratkaliyeva/project2'
        },
        {
            id: 3,
            src: project3,
            code: 'https://github.com/aishatmuratkaliyeva/project3'
        },
        {
            id: 4,
            src: project4,
            code: 'https://github.com/aishatmuratkaliyeva/project4'
        },
        {
            id: 5,
            src: project5,
            code: 'https://github.com/aishatmuratkaliyeva/project5'
        },
        {
            
            id: 6,
            src: project6,
            code: 'https://github.com/aishatmuratkaliyeva/project7'
        },
        {
            id: 7,
            src: project7,
            code: 'https://github.com/aishatmuratkaliyeva/project8'
        },
        {
            id: 8,
            src: project8,
            code: 'https://github.com/aishatmuratkaliyeva/project9'
        },
        {
            id: 9,
            src: project9,
            code: 'https://github.com/aishatmuratkaliyeva/project11'
        },
    ]


    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Здесь вы можете ознакомиться с моими работами за этот семестр обучения, который, безусловно, будет продолжаться</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects


