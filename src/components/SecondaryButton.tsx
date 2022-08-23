import { useState } from 'react';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { theme } from '../constants/Theme';

interface Props {
    text: string;
    link: string;
    icon: string;
}

const SecondaryButton = ({ text, link, icon }: Props) => {

    let [hover, setHover] = useState(false);
    const iconStyles = {
        opacity: '0',
        transition: 'all .2s ease',
        position: 'absolute',
        right: '70px',
        ...(hover === true && {
            right: '40px',
            opacity: '1',
        }),
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                component={motion.button}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: .1, ease: 'easeInOut', }}
                whileInView={{ opacity: 1, x: 0 }}
                variant='outlined'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                    px: 5,
                    mt: 2,
                    fontSize: '1.25rem',
                    width: { xs: '100%', md: 'auto' },
                    transition: 'all .2s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)!important',
                        pr: 9
                    }
                }}>
                <Link underline="none"
                    color="primary"
                    href={link}
                    key='foxvillage-mainpage-hero-cta'>
                    {text}
                </Link>

                {/* if icon prop is set to explore, render an explore icon */}
                {icon === 'explore'
                    ? <ExploreIcon
                        sx={iconStyles
                        } >
                    </ExploreIcon>
                    : null}

                {/* if icon prop is set to clock, render a clock icon */}
                {icon === 'clock'
                    ? <AccessTimeFilledIcon
                        sx={iconStyles
                        } >
                    </AccessTimeFilledIcon>
                    : null}

                {/* if icon prop is set to mail, render a mail icon */}
                {icon === 'mail'
                    ? <MailOutlineIcon
                        sx={iconStyles
                        } >
                    </MailOutlineIcon>
                    : null}

                {/* if icon prop is set to map, render a map icon */}
                {icon === 'map'
                    ? <MapIcon
                        sx={iconStyles
                        } >
                    </MapIcon>
                    : null}

                {/* if icon prop is set to paw, render a paw icon */}
                {icon === 'paw'
                    ? <PetsIcon
                        sx={iconStyles
                        } >
                    </PetsIcon>
                    : null}

                {/* if icon prop is set to home, render a home icon */}
                {icon === 'home'
                    ? <HomeIcon
                        sx={iconStyles
                        } >
                    </HomeIcon>
                    : null}

                {/* if icon prop is set to info, render a info icon */}
                {icon === 'info'
                    ? <InfoIcon
                        sx={iconStyles
                        } >
                    </InfoIcon>
                    : null}
            </Button >
        </ThemeProvider>
    )
}

export default SecondaryButton