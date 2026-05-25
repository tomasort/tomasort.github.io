import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, CircleMarker, TileLayer} from 'react-leaflet'

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
                <p>Feel free to reach out about software engineering opportunities, collaborations, or just to say hello. Fill out the form and I'll get back to you as soon as I can.</p>
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
            New York, NY
        </div>
        <div className="map-wrap">
            <MapContainer center={[40.764681072223205, -73.96254039945119]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <CircleMarker
                    center={[40.766, -73.962]}
                    pathOptions={{ color: '#115173' }}
                    radius={50}>
                </CircleMarker>
            </MapContainer>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact