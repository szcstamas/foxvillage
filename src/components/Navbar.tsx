import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0e4627',
        },
        secondary: {
            main: '#f9bc60',
            light: '#fff',
        },
    },
    typography: {
        button: {
            fontSize: '16px',
            textTransform: "none"
        },
    },
});

const pages = ['Homepage', 'Events', 'Discover', 'Prices', 'About us', 'Contact us'];
const pagesLinks = ['/', '/events', '/discover', '/prices', '/about', '/contact',];
const subPages = ['Night Trip', 'Animal Shows', 'Close Up', 'Animals', 'Poultry Yard', 'Fox Forest'];
const subPagesLinks = ['/events/night-trip', '/events/animal-show', '/events/close-up', '/discover/animals', '/discover/poultry-yard', '/discover/fox-forest'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    let [isVisible, setIsVisible] = useState(0);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                justifyContent: 'flex-start',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu-appbar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                            {pages.map((page, index) => (
                                <Button variant="contained" disableElevation>
                                    <Link
                                        underline="none"
                                        color="secondary.light"
                                        href={pagesLinks[index]}
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        {page}
                                    </Link>
                                </Button>
                            )).slice(0, 1)}

                            <Box className="dropdown" onMouseEnter={() => setIsVisible(1)} onMouseLeave={() => setIsVisible(0)}>
                                <Button variant="contained" className="dropbtn" disableElevation>
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

                                <Button variant="contained" disableElevation>
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
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;
