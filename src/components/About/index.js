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
                <p>
                    Adipisicing est magna tempor do minim. Culpa esse laborum ex aliquip ut minim laborum. Commodo veniam anim nulla do consectetur. Ullamco et fugiat ea deserunt Lorem dolore Lorem qui mollit sint esse magna. Ipsum ullamco deserunt duis dolor fugiat nostrud proident id. In ad in pariatur eiusmod cillum deserunt magna.
                </p>
                <p>
                    Aliquip sint Lorem qui commodo duis eiusmod sint ad nostrud voluptate. Dolor elit aute ex sit eu laboris minim pariatur esse ea duis. Commodo amet minim ad id fugiat adipisicing dolor esse. Id aliquip exercitation consequat ipsum est nulla minim reprehenderit deserunt adipisicing anim. Tempor ea mollit quis dolor veniam cupidatat id.
                </p>
                <p>
                    Et commodo exercitation enim fugiat culpa sint laboris ut anim elit aute ipsum nulla culpa. Irure minim qui amet velit ex. Velit sit consectetur non commodo Lorem. Ut adipisicing elit aliquip occaecat. Excepteur labore Lorem exercitation aliquip velit. Laboris dolore ut ipsum mollit cupidatat cillum voluptate aute.
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