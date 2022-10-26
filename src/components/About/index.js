import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import { ReactComponent as JavaScript } from '../../assets/fontawesome/svgs/brands/square-js.svg';
import { ReactComponent as ReactJs } from '../../assets/fontawesome/svgs/brands/react.svg';
import { ReactComponent as Java } from '../../assets/fontawesome/svgs/brands/java.svg';
import { ReactComponent as Python } from '../../assets/fontawesome/svgs/brands/python.svg';
import { ReactComponent as Tensorflow } from '../../assets/fontawesome/svgs/brands/tensorflow.svg';
import { ReactComponent as Cpp } from '../../assets/fontawesome/svgs/brands/cpp.svg';

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
                <p>I am currently a graduate student at NYU pursuing a Masters's degree in Computer science with a strong foundation in programming, algorithms, and software development seeking a full-time software developer opportunity. Please contact me at tor213@nyu.edu or at 305-123-4567.
                </p>
                <p>
                I decided to study computer science because I've always been interested in finding out how stuff works. I believe computers have revolutionized the way we live our modern lives, and yet the average person does not know how these machines work. My goal as a computer science student is to understand and develop the power and versatility of computers. I'm interested in the interactions between human beings and computers, and how we can use artificial intelligence to perform difficult tasks that we previously thought were impossible. 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                <div className='face1'>
                    <JavaScript fill="currentColor" color="#dd0031"/>
                </div>
                <div className='face2'>
                    <ReactJs fill="currentColor" color="#EFD81D"/>
                </div>
                <div className='face3'>
                    <Java fill="currentColor" color="#28A4D9"/>
                </div>
                <div className='face4'>
                    <Python fill="currentColor" color="#5ED4F4"/>
                </div>
                <div className='face5'>
                    <Cpp fill="currentColor" color="#EC48"/>
                </div>
                <div className='face6'>
                    <Tensorflow fill="currentColor" color="#f06529"/>
                </div>

            
                </div>
            </div>
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default About