/*import React, { createContext, useState, useEffect, useContext } from 'react';


const ScrollContext = createContext();


export const ScrollProvider = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll); 
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ isScrolled }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    return useContext(ScrollContext);
};*/
