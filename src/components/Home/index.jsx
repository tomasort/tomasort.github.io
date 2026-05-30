import './index.scss'; 
import ProfilePic from '../../assets/images/website_home_picture.png';
import { Link } from 'react-router-dom';

const proofItems = [
    {
        label: 'Backend systems',
        value: 'APIs, authentication, async jobs, and data workflows built for maintainability.',
    },
    {
        label: 'Product delivery',
        value: 'Full-stack execution with clear UX, solid architecture, and deployment-ready code.',
    },
]

const Home = () => {
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <p className='section-kicker'>Software Engineer</p>
                <h1 className='hero-name'>Tomás Ortega</h1>
                <h2>Backend-first engineer building reliable Python systems and polished full-stack products.</h2>
                <p className='hero-summary'>
                    I build maintainable software across APIs, databases, async processing, analytics workflows, and customer-facing interfaces with an emphasis on clarity, performance, and shipping useful products.
                </p>
                <div className='hero-actions'>
                    <Link to='projects' className='flat-button'>VIEW PROJECTS</Link>
                    <Link to='contact' className='secondary-button'>LET&apos;S TALK</Link>
                </div>
                <div className='hero-highlights'>
                    <span>Python backend</span>
                    <span>Full-stack product work</span>
                    <span>PostgreSQL, Docker, and APIs</span>
                </div>
                <div className='hero-proof-grid'>
                    {proofItems.map((item) => (
                        <article className='proof-card' key={item.label}>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                        </article>
                    ))}
                </div>
            </div>
            <div className='hero-visual'>
                <div className='profile-card'>
                    <div className='profile-media'>
                        <img className='profile-picture' src={ProfilePic} alt='Tomás Ortega portrait'/>
                    </div>
                    <div className='profile-copy'>
                        <strong>Based in New York</strong>
                        <span>Open to backend, platform, and full-stack engineering roles.</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home