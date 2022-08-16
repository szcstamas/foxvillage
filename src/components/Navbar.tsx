import React from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <Link to='/'></Link>
            </div>

            <div className="navbar-right">
                <Link to='/'>Homepage</Link>
                <div className="navbar-dropdown">
                    <Link to='/events/night-trip'>Night trips</Link>
                    <Link to='/events/animal-show'>Animal shows</Link>
                    <Link to='/events/close-up'>Close up</Link>
                </div>
                <div className="navbar-dropdown">
                    <Link to='/discover/animals'>Animals</Link>
                    <Link to='/discover/poultry-yard'>Poultry yard</Link>
                    <Link to='/discover/fox-forest'>Fox forest</Link>
                </div>
                <Link to='/prices'>Prices</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

        </div >
    )
}

export default Navbar
