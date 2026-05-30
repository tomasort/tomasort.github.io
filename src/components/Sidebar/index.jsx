import './index.scss';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoT from '../../assets/images/logo-t.png';
import Home from '../../assets/fontawesome/svgs/solid/house-chimney.svg?react';
import User from '../../assets/fontawesome/svgs/solid/user.svg?react';
import Envelope from '../../assets/fontawesome/svgs/solid/envelope.svg?react';
import DiagramProject from '../../assets/fontawesome/svgs/solid/diagram-project.svg?react';
import LinkedIn from '../../assets/fontawesome/svgs/brands/linkedin.svg?react';
import GitHub from '../../assets/fontawesome/svgs/brands/square-github.svg?react';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { to: '/', label: 'Home', className: 'home-link', Icon: Home, end: true },
        { to: '/about', label: 'About', className: 'about-link', Icon: User },
        { to: '/projects', label: 'Projects', className: 'projects-link', Icon: DiagramProject },
        { to: '/contact', label: 'Contact', className: 'contact-link', Icon: Envelope },
    ]

    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    return (
        <div className={menuOpen ? 'nav-bar menu-open' : 'nav-bar'}>
            <Link className='logo' to='/'>
                <span className='logo-mark'>
                    <img src={LogoT} alt="Tomás Ortega logo"/>
                </span>
                <span className='logo-copy'>
                    <strong>Tomás Ortega</strong>
                    <span>Software Engineer</span>
                </span>
            </Link>
            <button
                type='button'
                className='menu-toggle'
                aria-expanded={menuOpen}
                aria-controls='site-navigation'
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav id='site-navigation'>
                {navItems.map(({ to, label, className, Icon, end }) => (
                    <NavLink
                        key={to}
                        className={({ isActive }) => isActive ? `nav-item active ${className}` : `nav-item ${className}`}
                        to={to}
                        end={end}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className='nav-icon' aria-hidden='true'>
                            <Icon fill="currentColor" />
                        </span>
                        <span className='nav-label'>{label}</span>
                    </NavLink>
                ))}
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tomas-ortega/">
                        <LinkedIn fill="currentColor" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/tomasort">
                        <GitHub fill="currentColor" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar