import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import Logo from './Logo';

const pages = ['Homepage', 'Events', 'Discover', 'Prices', 'About us', 'Contact us'];
const pagesLinks = ['/', '/events', '/discover', '/prices', '/about', '/contact',];
const subPages = ['Night Trip', 'Animal Shows', 'Close Up', 'Animals', 'Poultry Yard', 'Fox Forest'];
const subPagesLinks = ['/events/night-trip', '/events/animal-show', '/events/close-up', '/discover/animals', '/discover/poultry-yard', '/discover/fox-forest'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    let [isVisible, setIsVisible] = useState(0);
    let [hover, setHover] = useState(false);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [hamburgerRightMenu, setHamburgerRightMenu] = useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl" sx={{ my: 2 }}>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', position: 'static' }}>
                        <Link
                            href='/'
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <Logo
                                width={150}
                                fill={hover === true ? '#f9bc60' : '#fff'}
                            />
                        </Link>

                        <Box sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', md: 'none' },
                        }}>
                            <IconButton
                                size="large"
                                aria-label="menu-appbar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => setHamburgerRightMenu(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* here goes rightmenu in hamburger */}
                            <AnimatePresence>
                                {hamburgerRightMenu && (
                                    <Box
                                        component={motion.div}
                                        initial={{ x: 200, opacity: 0, }}
                                        animate={{ x: 0, opacity: 1, }}
                                        exit={{ x: 200, opacity: 0, }}
                                        sx={{
                                            width: '200px',
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            backgroundColor: 'secondary.main',
                                            color: 'primary.main',
                                            padding: 2,
                                            borderRadius: '0px 0px 0px 10px'
                                        }}
                                        className="dropdown-content">

                                        <Box
                                            component='span'
                                            sx={{

                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: 'primary.main',
                                                borderRadius: '50%',
                                                margin: '.5rem'
                                            }}
                                        >
                                            <KeyboardArrowRightIcon
                                                sx={{ color: 'secondary.light' }}
                                                onClick={() => setHamburgerRightMenu(false)}
                                            />
                                        </Box>
                                        <Box
                                            component='div'
                                            sx={{
                                                display: 'block',
                                            }}
                                        >
                                            {pages.map((page, index) => (
                                                <Link
                                                    underline="none"
                                                    href={pagesLinks[index]}
                                                    key={index}
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            color: 'primary.main',
                                                            backgroundColor: 'transparent',
                                                            padding: '16px',
                                                            '&:focus': {
                                                                backgroundColor: 'transparent'
                                                            }
                                                        }}
                                                        key={`firstMobileLink${index}`}
                                                        className="dropbtn"
                                                        disableElevation>
                                                        {page}
                                                    </Button>
                                                </Link>
                                            )).slice(0, 1)}

                                            <Box className="dropdown" onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}>
                                                <Button
                                                    variant="contained"
                                                    className="dropbtn"
                                                    sx={{

                                                        color: '#0e4627!important',
                                                        '&:hover': {

                                                            color: '#fff!important'
                                                        }
                                                    }}
                                                    disableElevation>
                                                    Events
                                                </Button>
                                                <AnimatePresence>
                                                    {isVisible === 1 && (
                                                        <Box
                                                            component={motion.div}
                                                            initial={{ y: -10, opacity: 0, }}
                                                            whileInView={{
                                                                y: 0,
                                                                opacity: 1,
                                                                transition: { duration: .2 }
                                                            }}
                                                            exit={{ y: -10, opacity: 0, }}
                                                            sx={{
                                                                backgroundColor: '#fff!important',
                                                                width: '100%',
                                                                borderRadius: '0px 0px 0px 10px!important'
                                                            }}
                                                            className="dropdown-content">
                                                            {subPages.map((subPage, index) => (

                                                                <Link
                                                                    underline="none"
                                                                    style={{ textDecoration: "none" }}
                                                                    href={subPagesLinks[index]}
                                                                    key={index}
                                                                    onClick={handleCloseNavMenu}
                                                                >
                                                                    {subPage}
                                                                </Link>
                                                            )).slice(0, 3)}
                                                        </Box>)}
                                                </AnimatePresence>
                                            </Box>

                                            <Box className="dropdown" onMouseEnter={() => setIsVisible(2)} onMouseLeave={() => setIsVisible(0)}>
                                                <Button
                                                    variant="contained"
                                                    className="dropbtn"
                                                    sx={{

                                                        color: '#0e4627!important',
                                                        '&:hover': {

                                                            color: '#fff!important'
                                                        }
                                                    }}
                                                    disableElevation>
                                                    Discover
                                                </Button>
                                                <AnimatePresence>
                                                    {isVisible === 2 && (
                                                        <Box
                                                            component={motion.div}
                                                            initial={{ y: -10, opacity: 0, }}
                                                            whileInView={{
                                                                y: 0,
                                                                opacity: 1,
                                                                transition: { duration: .2 }
                                                            }}
                                                            exit={{ y: -10, opacity: 0, }}
                                                            sx={{
                                                                backgroundColor: '#fff!important',
                                                                width: '100%',
                                                                borderRadius: '0px 0px 0px 10px!important'
                                                            }}
                                                            className="dropdown-content">
                                                            {subPages.map((subPage, index) => (

                                                                <Link
                                                                    underline="none"
                                                                    style={{ textDecoration: "none" }}
                                                                    href={subPagesLinks[index]}
                                                                    key={index}
                                                                    onClick={handleCloseNavMenu}
                                                                >
                                                                    {subPage}
                                                                </Link>
                                                            )).slice(3, subPages.length)}
                                                        </Box>
                                                    )}
                                                </AnimatePresence>
                                            </Box>

                                            {pages.map((page, index) => (

                                                <Link
                                                    underline="none"
                                                    color="secondary.light"
                                                    href={pagesLinks[index]}
                                                    key={page}
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            color: 'primary.main',
                                                            backgroundColor: 'transparent',
                                                            padding: '16px',
                                                            '&:focus': {
                                                                backgroundColor: 'transparent'
                                                            }
                                                        }}
                                                        key={`lastTwoMobileLinksInHeader${index}`}
                                                        className="dropbtn"
                                                        disableElevation>
                                                        {page}
                                                    </Button>
                                                </Link>
                                            )).slice(4, pages.length)}


                                        </Box>
                                    </Box>
                                )}
                            </AnimatePresence>

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                            {pages.map((page, index) => (
                                <Button
                                    variant="contained"
                                    key={`firstDesktopLink${index}`}
                                    disableElevation>
                                    <Link
                                        underline="none"
                                        color="secondary.light"
                                        href={pagesLinks[index]}

                                        onClick={handleCloseNavMenu}
                                    >
                                        {page}
                                    </Link>
                                </Button>
                            )).slice(0, 1)}

                            <Box className="dropdown" onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}>
                                <Button
                                    variant="contained"
                                    className="dropbtn"
                                    key={'b'}
                                    disableElevation>
                                    Events
                                </Button>
                                <AnimatePresence>
                                    {isVisible === 1 && (
                                        <Box
                                            component={motion.div}
                                            initial={{ y: -10, opacity: 0, }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1,
                                                transition: { duration: .2 }
                                            }}
                                            exit={{ y: -10, opacity: 0, }}
                                            className="dropdown-content">
                                            {subPages.map((subPage, index) => (

                                                <Link
                                                    underline="none"
                                                    style={{ textDecoration: "none" }}
                                                    href={subPagesLinks[index]}
                                                    key={subPage}
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    {subPage}
                                                </Link>
                                            )).slice(0, 3)}
                                        </Box>)}
                                </AnimatePresence>
                            </Box>

                            <Box className="dropdown" onMouseEnter={() => setIsVisible(2)} onMouseLeave={() => setIsVisible(0)}>
                                <Button variant="contained" className="dropbtn" disableElevation>
                                    Discover
                                </Button>
                                <AnimatePresence>
                                    {isVisible === 2 && (
                                        <Box
                                            component={motion.div}
                                            initial={{ y: -10, opacity: 0, }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1,
                                                transition: { duration: .2 }
                                            }}
                                            exit={{ y: -10, opacity: 0, }}
                                            className="dropdown-content">
                                            {subPages.map((subPage, index) => (

                                                <Link
                                                    underline="none"
                                                    style={{ textDecoration: "none" }}
                                                    href={subPagesLinks[index]}
                                                    key={subPage}
                                                    onClick={handleCloseNavMenu}
                                                >
                                                    {subPage}
                                                </Link>
                                            )).slice(3, subPages.length)}
                                        </Box>
                                    )}
                                </AnimatePresence>
                            </Box>

                            {pages.map((page, index) => (

                                <Button
                                    variant="contained"
                                    key={`lastDesktopLinks${index}`}
                                    disableElevation>
                                    <Link
                                        color="secondary.light"
                                        style={{ textDecoration: "none" }}
                                        href={pagesLinks[index]}
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        {page}
                                    </Link>
                                </Button>
                            )).slice(4, pages.length)}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >
        </ThemeProvider >
    )
}

export default Navbar;
