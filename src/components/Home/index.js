import './index.scss'; 
import LogoTitle from '../../assets/images/logo-t.png';
import Loader from 'react-loaders'
import ProfilePic from '../../assets/images/website_home_picture.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'm', 'á', 's']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['H', 'i']} idx={10}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={['I', "'m"]} idx={12}/>
                    <img src={LogoTitle} alt='developer'/> 
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                     <br/> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Full stack developer</h2>
                <Link to='contact' className='flat-button'>CONTACT ME</Link>
                <img className='profile-picture' src={ProfilePic} alt='profile'/>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home