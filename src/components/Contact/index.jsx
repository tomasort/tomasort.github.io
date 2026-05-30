import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, CircleMarker, TileLayer} from 'react-leaflet';

// Upper West Side, New York, NY
const MAP_CENTER = [40.7647, -73.9625];

const contactCards = [
    { label: 'Open to', value: 'Backend, platform, and full-stack product roles.' },
    { label: 'Based in', value: 'New York City, with openness to strong remote or hybrid teams.' },
    { label: 'Best for', value: 'Engineering opportunities, collaborations, and technical conversations.' },
]

const Contact = () => {
    const refForm = useRef();
    const emailConfig = {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
            alert('The contact form is not configured yet. Add the EmailJS Vite environment variables to enable sending.')
            return;
        }

        emailjs.sendForm(
            emailConfig.serviceId,
            emailConfig.templateId,
            refForm.current,
            emailConfig.publicKey,
        )
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
                <p className='section-kicker'>Contact</p>
                <h1>Let’s build something useful.</h1>
                <p className='section-lead'>If you’re hiring for backend, platform, or full-stack engineering work, I’d be glad to talk.</p>
                <div className='contact-cards'>
                    {contactCards.map((item) => (
                        <article className='contact-card' key={item.label}>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                        </article>
                    ))}
                </div>
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
            <div className='contact-map-panel'>
                <div className='info-map'>
                    Tomás Ortega
                    <span>New York City</span>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={MAP_CENTER}
                        zoom={13}
                        scrollWheelZoom={false}
                        className='contact-map'
                        attributionControl={false}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <CircleMarker
                            center={MAP_CENTER}
                            pathOptions={{ color: '#ffd700' }}
                            radius={20}>
                        </CircleMarker>
                    </MapContainer>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact