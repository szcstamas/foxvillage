import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import PrimaryButton from './PrimaryButton';

interface Props {
    backgroundImage: string;
}

const HeroSection = ({ backgroundImage }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.section}
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: .25, duration: .5, ease: 'easeInOut', }}
                sx={{
                    px: { sm: 10, md: 15, lg: 0 },
                    py: { sm: 10, md: 15, lg: 25 },
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .75, duration: .5, ease: 'easeInOut', }}
                    sx={{
                        maxWidth: { sm: '100%', lg: '1100px', xl: '1400px' },
                        m: 'auto'
                    }}
                >
                    <Typography variant='h1' color='primary'
                        sx={{
                            width: { xs: '100%', md: '70%' },
                            textAlign: { xs: 'center', md: 'left' },
                            mb: 4,
                        }}
                    >
                        Welcome to the
                        <Box component={motion.span} color='secondary.main'> Fox Village </Box>
                        of Zsambek!
                    </Typography>
                    <Typography paragraph={true} color='main'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: { xs: 'secondary.light', xl: '#272727' },
                            textShadow: { xs: '0px 4px 8px rgba(0, 0, 0, .8)', xl: 'none' }
                        }}
                    >
                        Explore our mythical village of wonders in the city of Zsambek, located in Hungary!
                    </Typography>
                    <PrimaryButton
                        text='Explore'
                        link='#explore'
                        icon='explore'
                    />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HeroSection