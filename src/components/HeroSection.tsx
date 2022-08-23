import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface Props {
    backgroundImage: string;
    h1TextFirstSlice: string;
    h1Span: string;
    h1TextSecondSlice: string;
    pText: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    primaryBtnIcon: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
    secondaryBtnIcon: string;
}

const HeroSection = ({ backgroundImage, h1TextFirstSlice, h1Span, h1TextSecondSlice, pText, primaryBtnText, primaryBtnLink, primaryBtnIcon, secondaryBtnText, secondaryBtnLink, secondaryBtnIcon }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                component={motion.section}
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: .25, duration: .5, ease: 'easeInOut', }}
                sx={{
                    px: { xs: 5, sm: 10, md: 15, lg: 0 },
                    py: { xs: 5, sm: 10, md: 15, lg: 25 },
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
                        {h1TextFirstSlice}
                        <Box component={motion.span} color='secondary.main'> {h1Span} </Box>
                        {h1TextSecondSlice}
                    </Typography>
                    <Typography paragraph={true} color='main'
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            color: { xs: 'secondary.light', xl: '#272727' },
                            textShadow: { xs: '0px 4px 8px rgba(0, 0, 0, .8)', xl: 'none' }
                        }}
                    >
                        {pText}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        gap: 1.75
                    }}>
                        <PrimaryButton
                            text={primaryBtnText}
                            link={primaryBtnLink}
                            icon={primaryBtnIcon}
                        />
                        <SecondaryButton
                            text={secondaryBtnText}
                            link={secondaryBtnLink}
                            icon={secondaryBtnIcon}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HeroSection