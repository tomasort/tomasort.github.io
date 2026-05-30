import './index.scss';

const projects = [
    {
        category: 'Backend Platform',
        title: 'Containerized Media Streaming Platform',
        description:
            'A multi-service media platform built around Flask, PostgreSQL, Celery, RabbitMQ, Docker Compose, and WebRTC/GStreamer components.',
        points: [
            'Designed backend orchestration for real-time pipeline status and Linux device integration.',
            'Structured the platform as a maintainable multi-service system instead of a single app.',
            'Made the full development workflow reproducible with container-based local setup.',
        ],
        tech: ['Python', 'Flask', 'PostgreSQL', 'Celery', 'RabbitMQ', 'Docker', 'WebRTC', 'GStreamer'],
    },
    {
        category: 'Compilers / Systems',
        title: 'Compiler for ChocoPy (Python-like Language)',
        description:
            'A full compiler for a statically typed Python-like language, built as an NYU Compiler Construction capstone.',
        points: [
            'Implemented the full pipeline from lexing and parsing through semantic analysis.',
            'Generated RISC-V output as the backend target for the language runtime.',
            'Used the project to deepen low-level reasoning about language and systems design.',
        ],
        tech: ['Java', 'Maven', 'JFlex', 'CUP', 'RISC-V'],
    },
    {
        category: 'Product / Data Systems',
        title: 'Data Science Workflow Manager',
        description:
            'A web platform for building and running data processing and analytics workflows with visibility into execution and results.',
        points: [
            'Focused on pipeline composition, execution tracking, and clear system visibility.',
            'Balanced backend workflow concerns with a usable front-end experience.',
            'Treated data tooling as a product, not just an internal script interface.',
        ],
        tech: ['Python', 'Flask', 'PostgreSQL', 'React', 'Docker'],
    },
]

const Projects = () => {
    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <p className='section-kicker'>Selected Work</p>
                <h1>Projects that show how I think and build.</h1>
                <p className='section-lead'>A few examples of backend-heavy, systems-oriented, and product-minded work across platforms, tooling, and applied engineering.</p>
            </div>
            <div className='projects-list'>
                {projects.map((project) => (
                    <article className='project-card' key={project.title}>
                        <p className='project-category'>{project.category}</p>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <ul className='project-points'>
                            {project.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <div className='tech-tags'>
                            {project.tech.map((tag) => (
                                <span className='tech-tag' key={tag}>{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects
