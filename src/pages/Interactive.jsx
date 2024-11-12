import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Globe from './globe';

const Interactive = () => {
    // Estado para guardar la posición del objeto 3D
    const [scrollPosition, setScrollPosition] = useState(0);

    // Effect para escuchar el evento de scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Obtiene la posición de desplazamiento
        };

        window.addEventListener('scroll', handleScroll); // Agrega el listener de scroll
        return () => {
            window.removeEventListener('scroll', handleScroll); // Elimina el listener cuando el componente se desmonte
        };
    }, []);


    return (
        <Canvas style={{ width: '100%', height: '100%' }}
        camera={{
            position: [20, 30, 10],
            fov: 50, //campo de visión
          }}
        >
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls />
            <Globe scrollPosition={scrollPosition}/>
        </Canvas>
    );
};

export default Interactive;
