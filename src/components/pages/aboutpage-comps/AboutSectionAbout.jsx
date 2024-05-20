import React from 'react'


const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mt-8 md:mt-0'>
                <img 
  src="/images/photo.png" 
  alt="My profile" 
  className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl' 
  style={{ filter: 'drop-shadow(0px -4px 4px rgba(255, 255, 255, 0.5))' }} 
/>


                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

                    <div className='flex items-center bg-primary-color/20 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/photo3.png" alt="" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Мне 19 лет</h2>
                    </div>
                    
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>Я живу в Актобе, люблю свой город. В настоящее время я учусь по специальности программирование в Алматы, 
                    где получаю необходимые знания и навыки для создания программного обеспечения, веб-сайтов и приложений. 
                    Мой курс включает в себя изучение различных языков программирования, таких как Python, Java, JavaScript, 2D, 3D и многих других.</p>

                    <p className='text-md md:text-lg text-gray-300 max-x-md text-justify'>Помимо этого, мне нравится изучать различные языки и я люблю плавать, занимаюсь плаванием на протяжении 10 лет.</p>
                </div>
            </div>

            
        </section>
    );
}

export default AboutSectionAbout
