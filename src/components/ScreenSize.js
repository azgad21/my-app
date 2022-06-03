import React, { useState, useEffect } from 'react';


const ScreenSize = () => {

    const [ screenSize, setScreenSize ] = useState("pantalla chica");

    useEffect( () => {

            const callback = () => {

                if(window.innerWidth < 500){
                    setScreenSize("pantalla peqeuña")
                } else{
                    setScreenSize("pantalla grande")
                }
            }

            window.addEventListener("resize", callback)  
        
        return () => {
            window.removeEventListener("resize", callback )
        }

    }, [])

    

    return (
        <div>
            
            <h1>{screenSize}</h1>

        </div>
    );
};

export default ScreenSize;