import './index.scss';
import JavaScript from '../../assets/fontawesome/svgs/brands/square-js.svg?react';
import ReactJs from '../../assets/fontawesome/svgs/brands/react.svg?react';
import Docker from '../../assets/fontawesome/svgs/brands/docker.svg?react';
import Python from '../../assets/fontawesome/svgs/brands/python.svg?react';
import NodeJs from '../../assets/fontawesome/svgs/brands/node-js.svg?react';
import GitHub from '../../assets/fontawesome/svgs/brands/github.svg?react';

const skills = [
    { label: 'JavaScript', icon: JavaScript, color: '#F0DB4F' },
    { label: 'React', icon: ReactJs, color: '#61DAFB' },
    { label: 'Docker', icon: Docker, color: '#2496ED' },
    { label: 'Python', icon: Python, color: '#3776AB' },
    { label: 'Node.js', icon: NodeJs, color: '#539E43' },
    { label: 'GitHub', icon: GitHub, color: '#ffffff' },
]

const profileFacts = [
    { label: 'Focus', value: 'Backend systems, product engineering, and Python-first development.' },
    { label: 'Education', value: 'M.S. Computer Science, NYU. B.S. Computer Science, FIU.' },
    { label: 'Location', value: 'Based in New York and open to strong engineering teams.' },
]

const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <p className='section-kicker'>About</p>
                <h1>Technical depth with product judgment.</h1>
                <p className='section-lead'>I do my best work on teams that care about reliability, clarity, and building software that people actually want to use.</p>
                <div className='about-copy'>
                    <p>
                        I&apos;m a software engineer with a strong computer science foundation and experience across backend services, full-stack applications, APIs, authentication, testing, deployment workflows, and data-heavy systems.
                    </p>
                    <p>
                        My background combines academic rigor with practical product work. I&apos;m particularly interested in backend and platform roles where architecture, clean execution, and thoughtful collaboration matter.
                    </p>
                </div>
                <div className='about-facts'>
                    {profileFacts.map((fact) => (
                        <article className='fact-card' key={fact.label}>
                            <span>{fact.label}</span>
                            <strong>{fact.value}</strong>
                        </article>
                    ))}
                </div>
            </div>

            <div className='skills-panel' aria-label='Core technologies'>
                <div className='skills-header'>
                    <p className='skills-kicker'>Core stack</p>
                    <h2>Tools I use to design, build, and ship.</h2>
                </div>
                <p className='skills-intro'>A practical set of technologies I rely on for backend-heavy product development.</p>
                <div className='skills-grid'>
                    {skills.map(({ label, icon: Icon, color }) => (
                        <div className='skill-card' key={label}>
                            <span className='skill-icon' style={{ color }}>
                                <Icon />
                            </span>
                            <span className='skill-label'>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default About