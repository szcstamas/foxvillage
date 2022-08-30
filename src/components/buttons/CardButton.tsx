import { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ForestIcon from '@mui/icons-material/Forest';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../constants/Theme';
import { motion } from 'framer-motion';

interface Props {
    text: string;
    link: string;
    icon: string;
}

const CardButton = ({ text, link, icon }: Props) => {

    let [hover, setHover] = useState(false);
    const iconStyles = {
        opacity: { sm: '1', md: '0' },
        ml: 1.2,
        transition: 'all .2s ease',
        position: { sm: 'static', md: 'absolute' },
        right: { md: '125px', lg: '160px' },
        ...(hover === true && {
            right: { md: '100px', lg: '150px' },
            opacity: { md: '1' },
        }),
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                component='div'
                color="primary"
            >
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
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        px: 5,
                        mt: 2,
                        fontSize: '1.25rem',
                        width: '100%',
                        bgcolor: 'secondary.main',
                        transition: 'all .2s ease',
                        '&:hover': {
                            pr: { md: 9 }
                        }
                    }}>

                    {text}

                    {/* if icon prop is set to explore, render an explore icon */}
                    {icon === 'explore'
                        ? <ExploreIcon
                            sx={iconStyles
                            } >
                        </ExploreIcon>
                        : null}

                    {/* if icon prop is set to rightarrow, render a right-arrow icon */}
                    {icon === 'rightarrow'
                        ? <ArrowCircleRightIcon
                            sx={iconStyles
                            } >
                        </ArrowCircleRightIcon>
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

                    {/* if icon prop is set to forest, render a forest icon */}
                    {icon === 'forest'
                        ? <ForestIcon
                            sx={iconStyles
                            } >
                        </ForestIcon>
                        : null}
                </Button >
            </Box>
        </ThemeProvider>
    )
}

export default CardButton