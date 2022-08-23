import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Email from '../../assets/images/email.png';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('contact_service_tomas', 'template_k892wbv', refForm.current, 'aAM3-6SyeU8L_ulLw')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        );
    }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
                </h1>
                <p>
                    Laboris voluptate adipisicing do veniam laborum. Ut veniam reprehenderit proident voluptate nostrud labore cupidatat tempor anim aliqua cupidatat incididunt sint. Eu enim occaecat culpa nostrud non. Do sint fugiat cillum ea nisi esse tempor in eu ullamco. In voluptate anim labore amet incididunt in ut. Fugiat consequat cillum deserunt occaecat enim magna occaecat laboris non ad. Deserunt non cillum consectetur est consectetur dolore laboris.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name='subject' required/>
                            </li>
                            <li >
                                <textarea name='message' placeholder='Message' required />
                            </li>
                            <li >
                                <input type='submit' value='SEND' className='flat-button' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div className='info-map'>
            Tomás Ortega,
            <br />
            New York
            <br />
            <img src={Email} alt="email" width='200px'/>
        </div>
        <div className="map-wrap">
            <MapContainer center={[40.764681072223205, -73.96254039945119]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[40.764681072223205, -73.96254039945119]}>
                    <Popup> Nothing to see here</Popup>
                </Marker>
            </MapContainer>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact