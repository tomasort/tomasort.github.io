import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoT from '../../assets/images/logo-t.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { ReactComponent as Home } from '../../assets/fontawesome/svgs/solid/house-chimney.svg';
import { ReactComponent as User } from '../../assets/fontawesome/svgs/solid/user.svg';
import { ReactComponent as Envelope } from '../../assets/fontawesome/svgs/solid/envelope.svg';
import { ReactComponent as LinkedIn } from '../../assets/fontawesome/svgs/brands/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/fontawesome/svgs/brands/square-github.svg';
import { ReactComponent as Codepen } from '../../assets/fontawesome/svgs/brands/codepen.svg';
import { ReactComponent as Twitter } from '../../assets/fontawesome/svgs/brands/square-twitter.svg';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoT} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="logo"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className='home-link' to='/'>
                        <Home fill="currentColor"/> 
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                        <User fill="currentColor"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                        <Envelope fill="currentColor"/>
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
                <li>
                    <a target="_blank" rel="noreferrer" href="https://codepen.io/tomasOrtega">
                        <Codepen fill="currentColor" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/tommyvort">
                        <Twitter fill="currentColor" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar