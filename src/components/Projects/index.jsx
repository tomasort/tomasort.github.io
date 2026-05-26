import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const projects = [
    {
        title: 'Containerized Media Streaming Platform',
        description:
            'Multi-service media streaming platform built with Flask, PostgreSQL, Celery, RabbitMQ, Docker Compose, and WebRTC/GStreamer components. Features Linux device integration and real-time pipeline status updates.',
        tech: ['Python', 'Flask', 'PostgreSQL', 'Celery', 'RabbitMQ', 'Docker', 'WebRTC', 'GStreamer'],
    },
    {
        title: 'Compiler for ChocoPy (Python-like Language)',
        description:
            'Full compiler for a statically typed Python-like language, built as an NYU Compiler Construction capstone. Covers lexing, parsing, semantic analysis, and RISC-V code generation.',
        tech: ['Java', 'Maven', 'JFlex', 'CUP', 'RISC-V'],
    },
    {
        title: 'Data Science Workflow Manager',
        description:
            'Web-based platform for building and running data processing and analytics workflows. Supports pipeline composition, execution tracking, and visualization of results.',
        tech: ['Python', 'Flask', 'PostgreSQL', 'React', 'Docker'],
    },
]

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
            </div>
            <div className='projects-list'>
                {projects.map((project, i) => (
                    <div className='project-card' key={i}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className='tech-tags'>
                            {project.tech.map((tag, j) => (
                                <span className='tech-tag' key={j}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Projects
