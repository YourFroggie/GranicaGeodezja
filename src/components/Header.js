import './styles/Header-styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'

import logoImg from './img/fulllogo.png';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className="header flex-col">
            <div className="contact text-xs bg-[#D9D9D9] w-full h-8 flex justify-between items-center px-[9.5rem]">
                <p>
                    <FontAwesomeIcon icon={faMapPin} className='mr-[10px]'/>
                    Na Miasteczku 8, 61-144 Poznań
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} className='mr-[10px]' />
                    +48 889 963 663 
                    <span className="ml-[50px]">
                        <FontAwesomeIcon icon={faEnvelope} className='mr-[10px]' />
                        granica.szczepanski@gmail.com
                    </span>
                </p>
            </div>
            <div className="menu w-full flex justify-between items-center mt-3 mb-3 px-[9.5rem]">
                <div className="nav flex w-full">
                    <img src={logoImg} className='h-[88px] mr-[15px]' />
                    <ul className="flex justify-center items-center font-bold">
                        <Link className='mr-4' to='/'>Strona Główna</Link>
                        <Link className='mr-4' to='/offers'>Oferta</Link>
                        <Link className='mr-4' to='/informations'>Informacje</Link>
                        <Link className='mr-4' to='/gallery'>Galeria</Link>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className=' flex flex-row items-center bg-[#323232] text-white rounded-md lg-[10px] pt-2 pb-2 px-7'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className='text-s ml-2'>Napisz do mnie</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;