import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import JavaScript from '../../assets/fontawesome/svgs/brands/square-js.svg?react';
import ReactJs from '../../assets/fontawesome/svgs/brands/react.svg?react';
import Docker from '../../assets/fontawesome/svgs/brands/docker.svg?react';
import Python from '../../assets/fontawesome/svgs/brands/python.svg?react';
import NodeJs from '../../assets/fontawesome/svgs/brands/node-js.svg?react';
import GitHub from '../../assets/fontawesome/svgs/brands/github.svg?react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    I'm a software engineer with a strong foundation in computer science and experience building Python backend and full-stack applications. My work spans web application development, database-backed systems, APIs, authentication, testing, deployment workflows, and data processing.
                </p>
                <p>
                    Currently focused on independent full-stack development for small-business and product-oriented applications, alongside projects in analytics, geospatial search, media systems, and applied machine learning. I'm targeting software engineering roles in backend development, full-stack product work, and Python-based systems.
                </p>
                <p>
                    M.S. Computer Science — NYU (GPA 3.88) &nbsp;|&nbsp; B.S. Computer Science — FIU (GPA 3.84)
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                <div className='face1'>
                    <JavaScript color="#F0DB4F"/>
                </div>
                <div className='face2'>
                    <ReactJs color="#61DAFB"/>
                </div>
                <div className='face3'>
                    <Docker color="#2496ED"/>
                </div>
                <div className='face4'>
                    <Python color="#3776AB"/>
                </div>
                <div className='face5'>
                    <NodeJs color="#539E43"/>
                </div>
                <div className='face6'>
                    <GitHub color="#ffffff"/>
                </div>

            
                </div>
            </div>
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default About