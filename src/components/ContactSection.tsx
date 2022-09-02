import React from 'react';
import { Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CallIcon from '@mui/icons-material/Call';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import { motion } from 'framer-motion';

interface Props {
    xDirection: number;
    contactSectionIconLightColor: string;
    contactSectionIconDarkColor: string;
    contactSectionFirstIllu: string;
    contactSectionSecondIllu: string;
    contactSectionIlluWidth: number;
    contactSectionIlluWidthOnSmallScreen: number;
    contactSectionIlluInvert: number;
}

const ContactSection = ({ xDirection, contactSectionIconLightColor, contactSectionIconDarkColor, contactSectionFirstIllu, contactSectionSecondIllu, contactSectionIlluWidth, contactSectionIlluWidthOnSmallScreen, contactSectionIlluInvert }: Props) => {

    const cardSectionIlluStyleLeft = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        maxWidth: { xs: contactSectionIlluWidthOnSmallScreen, lg: contactSectionIlluWidth },
        maxHeight: `${contactSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `invert(${contactSectionIlluInvert}%)`
    };

    const cardSectionIlluStyleRight = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        maxWidth: { xs: contactSectionIlluWidthOnSmallScreen, lg: contactSectionIlluWidth },
        maxHeight: `${contactSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `invert(${contactSectionIlluInvert}%)`
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                id='contact'
                bgcolor='#272727'
                component={motion.section}
                sx={{
                    ...CardSectionStyles,
                    position: 'relative'
                }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: xDirection }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color='#fff'
                        >

                            Contact us
                        </Typography>
                        <CallIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [contactSectionIconLightColor, contactSectionIconDarkColor, contactSectionIconDarkColor, contactSectionIconDarkColor, contactSectionIconLightColor,],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            sx={{
                                fontSize: '3rem',
                                transformOrigin: 'center!important',
                                transformBox: 'fill-box',
                            }}
                        ></CallIcon>
                    </Box>
                </Box>

                <Box
                    component={motion.img}
                    src={contactSectionFirstIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...cardSectionIlluStyleLeft }}
                />
                <Box
                    component={motion.img}
                    src={contactSectionSecondIllu}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ ...cardSectionIlluStyleRight }}
                />

            </Box>
        </ThemeProvider>
    )
}

export default ContactSection