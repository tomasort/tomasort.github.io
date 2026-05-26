import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoT from '../../assets/images/logo-t.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import Home from '../../assets/fontawesome/svgs/solid/house-chimney.svg?react';
import User from '../../assets/fontawesome/svgs/solid/user.svg?react';
import Envelope from '../../assets/fontawesome/svgs/solid/envelope.svg?react';
import DiagramProject from '../../assets/fontawesome/svgs/solid/diagram-project.svg?react';
import LinkedIn from '../../assets/fontawesome/svgs/brands/linkedin.svg?react';
import GitHub from '../../assets/fontawesome/svgs/brands/square-github.svg?react';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoT} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="logo"/>
            </Link>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active home-link' : 'home-link'} to='/'>
                        <Home />
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active about-link' : 'about-link'} to='/about'>
                        <User />
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active projects-link' : 'projects-link'} to='/projects'>
                        <DiagramProject />
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active contact-link' : 'contact-link'} to='/contact'>
                        <Envelope />
                </NavLink>
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